import { Component, OnInit } from '@angular/core';
import { menuItem } from './interfaces/menu-item.model';
import { Observable, Subscription, finalize, first, tap } from 'rxjs';
import { getMenuItems } from 'src/app/core/db/menu-items';
import { AppService } from 'src/app/core/app-service/app.service';
import { Store, select } from '@ngrx/store';
import { AppStateModel } from 'src/app/app-state.model';
import { Pages } from 'src/app/modules/shared/enums/pages.enum';
import { Unsubscriber } from 'src/app/modules/shared/interfaces/unsubscriber';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, Unsubscriber {

  public subs: Subscription[] = [];

  public get getMenuItems(): menuItem[] {
    return this.menuItems;
  }

  private menuItems: menuItem[] = [];
  private currentPage!: Observable<Pages>;



  constructor(private readonly appService: AppService, private readonly store: Store<AppStateModel>) {
  }

  ngOnInit(): void {
    this.appService.loading = true;

    this.subs.push(
      getMenuItems.pipe(
        first(),
        tap(response => {
          this.menuItems = response;
        }),
        finalize(() => this.appService.loading = false)
      ).subscribe()
    );
  }

  public navigateTo(pageIndex: Pages) {
    //this.store.dispatch(setCurrentPage({ page: pageIndex }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
