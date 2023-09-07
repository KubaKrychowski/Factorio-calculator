import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { ItemService } from 'src/app/modules/shared/services/item.service';
import { Observable, Subscription, finalize, map, tap } from 'rxjs';
import { ItemModel } from 'src/app/modules/shared/interfaces/items/item.model';
import { AppStateModel } from 'src/app/app-state.model';
import { Store, select } from '@ngrx/store';
import { Unsubscriber } from 'src/app/modules/shared/interfaces/unsubscriber';
import { selectAllItems } from 'src/app/modules/shared/store/shared.selectors';
import { FetchItems } from 'src/app/modules/shared/store/shared.actions';
import { FormControl } from '@angular/forms';
import { fetchFilteredItems } from '../../store/admin.actions';
import { selectFilteredItems } from '../../store/admin.selectors';
import { AppService } from 'src/app/core/app-service/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterActions } from 'src/app/modules/shared/enums/router-actions.enum';
import { NotificationService } from 'src/app/core/notification-service/notification.service';
import { EditItemDialogDataModel } from '../../interfaces/edit-item-dialog-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements Unsubscriber, OnDestroy, AfterViewInit, OnInit {
  public items$: Observable<ItemModel[] | undefined>;
  public subs: Subscription[] = [];
  public searchTerm: FormControl<string | null> = new FormControl<string | null>(null);
  public selectedItem: ItemModel | undefined = undefined;

  public set selectItem(item: ItemModel) {
    this.selectedItem = item;
  }

  constructor(
    private readonly dialog: MatDialog,
    private readonly itemService: ItemService,
    private readonly store: Store<AppStateModel>,
    private readonly appService: AppService,
    private readonly route: ActivatedRoute,
    private readonly notificationService: NotificationService,
    private readonly router: Router) {
    this.loadItems();
    this.items$ = this.store.pipe(select(selectFilteredItems));
  }

  ngOnInit() {
    this.specifyRouteCallback();
  }

  ngAfterViewInit(): void {
    const searchTermChanged$ = this.searchTerm.valueChanges.subscribe(searchTerm => {
      const items$ = this.store.pipe(select(selectAllItems)).pipe(
        map(items => {
          return searchTerm ? this.getFilteredItemsByName(items, searchTerm) : items;
        })).subscribe(filteredItems => {
          this.store.dispatch(fetchFilteredItems({ filteredItems }))
        });

      this.subs.push(items$);
    });

    this.subs.push(searchTermChanged$);
  }

  public openAddItemDialog(): void {
    this.dialog.open(AddItemDialogComponent, {
      panelClass: 'fullscreen-dialog',
      autoFocus: false
    });
  }

  private loadItems(): void {
    const items$ = this.store.pipe(select(selectAllItems))
      .subscribe(items => {
        if (items && items.length > 0) {
          return;
        }

        this.appService.loading = true;
        this.itemService.getAllItems()
          .pipe(
            map(res => res.results.sort((a, b) => a.name.localeCompare(b.name))),
            tap(items => {
              this.store.dispatch(FetchItems({ items }));
              this.store.dispatch(fetchFilteredItems({ filteredItems: items }));
              this.specifyActiveItemFromRoute();
            }),
            finalize(() => this.appService.loading = false))
          .subscribe();
      });

    this.subs.push(items$);
  }

  private getFilteredItemsByName(items: ItemModel[], searchTerm: string): ItemModel[] {
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  private specifyRouteCallback(): void {
    switch (this.route.snapshot.data['routeAction']) {
      case RouterActions.ADD_ITEM: {
        this.openAddItemDialog();
        break;
      }

      case RouterActions.EDIT_ITEM: {
        const itemId = this.route.snapshot.params['itemId'];

        if (!itemId) {
          this.notificationService.notifyError();
          break;
        }

        const items$ = this.items$.
          pipe(
            map(items => items?.find(item => item.id === itemId)))
          .subscribe(item => this.openEditItemDialog(item as ItemModel));

        this.subs.push(items$);
      }
    }
  }

  private specifyActiveItemFromRoute() {
    const itemId = this.route.snapshot.params['id'];

    if (itemId) {
      this.items$.subscribe(items => {
        if (items) {
          const foundItem = items?.find(item => item.id === itemId);

          if (foundItem) {
            this.selectItem = foundItem;
          }
        }
      });
    }
  }

  private openEditItemDialog(item: ItemModel): void {
    this.dialog.open(AddItemDialogComponent,
      {
        panelClass: 'fullscreen-dialog',
        data: {
          selectedItem: item
        } as EditItemDialogDataModel,
      }).afterClosed().subscribe(() => {
        this.router.navigate(['admin']);
      });
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}

