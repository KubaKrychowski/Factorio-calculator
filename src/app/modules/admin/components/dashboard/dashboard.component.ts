import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { ItemService } from 'src/app/modules/shared/services/item.service';
import { Observable, map } from 'rxjs';
import { ItemModel } from 'src/app/modules/shared/interfaces/items/item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public items$: Observable<ItemModel[]>;

  constructor(private readonly dialog: MatDialog, private readonly itemService: ItemService) {
    this.items$ = this.itemService.getAllItems().pipe(map(res => res.results));
  }

  public openAddItemDialog() {
    this.dialog.open(AddItemDialogComponent, {
      panelClass: 'fullscreen-dialog',
    });
  }
}
