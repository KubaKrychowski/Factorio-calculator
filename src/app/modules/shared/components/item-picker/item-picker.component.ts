import { Component, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectAllItems } from '../../store/shared.selectors';
import { AppStateModel } from 'src/app/app-state.model';
import { ItemService } from '../../services/item.service';
import { Observable, Subscription, finalize, first, map, tap } from 'rxjs';
import { FetchItems } from '../../store/shared.actions';
import { ItemModel } from '../../interfaces/items/item.model';
import { AppService } from 'src/app/core/app-service/app.service';
import { fetchFilteredItems } from 'src/app/modules/admin/store/admin.actions';
import { Unsubscriber } from '../../interfaces/unsubscriber';
import { FormControl } from '@angular/forms';
import { selectFilteredItems } from 'src/app/modules/admin/store/admin.selectors';

@Component({
  selector: 'app-item-picker',
  templateUrl: './item-picker.component.html',
  styleUrls: ['./item-picker.component.scss'],
  providers: [ItemService]
})
export class ItemPickerComponent implements Unsubscriber {
  public searchTerm: FormControl<string | null> = new FormControl<string | null>(null);
  public items: ItemModel[] | undefined = [];
  subs: Subscription[] = [];

  @Output() selectedItem: EventEmitter<ItemModel> = new EventEmitter<ItemModel>();

  constructor(private readonly appService: AppService, private readonly store: Store<AppStateModel>, private readonly itemService: ItemService) {
    this.loadItems();
  }

  ngAfterViewInit(): void {
    const searchTermChanged$ = this.searchTerm.valueChanges.subscribe(searchTerm => {
      this.itemService.getAllItems().subscribe(res => {
        if (!searchTerm || searchTerm?.length === 0) {
          this.items = res.results;
        }

        if (searchTerm && searchTerm.length > 0) {
          const filteredItems = res.results.filter(i => i.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
          this.items = filteredItems;
        }
      });
    });

    this.subs.push(searchTermChanged$);
  }

  private loadItems(): void {
    this.itemService.getAllItems().subscribe(res => {
      this.items = res.results;
    });
  }

  private getFilteredItemsByName(items: ItemModel[], searchTerm: string): ItemModel[] {
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  public selectItem(item: ItemModel) {
    this.selectedItem.emit(item);
  }
}
