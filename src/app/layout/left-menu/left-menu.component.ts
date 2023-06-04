import { Component, OnDestroy, OnInit } from '@angular/core';
import { menuItem } from '../interfaces/menu-item.model';
import { Subscription, finalize, first, tap } from 'rxjs';
import { getMenuItems } from 'src/app/core/db/menu-items';
import { AppService } from 'src/app/core/app-service/app.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnDestroy {
  private menuItems: menuItem[] = [];
  private subs: Subscription[] = [];
  public get getMenuItems(): menuItem[] {
    return this.menuItems;
  }

  constructor(private readonly appService: AppService) { }

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

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
