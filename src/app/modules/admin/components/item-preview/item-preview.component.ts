import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemModel } from 'src/app/modules/shared/interfaces/items/item.model';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { EditItemDialogDataModel } from '../../interfaces/edit-item-dialog-data.model';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent {
  @Input() public selectedItem!: ItemModel;

  constructor(private readonly dialog: MatDialog) { }

  public selectedIndex = 0;

  public onEditButtonClick(): void {
    this.dialog.open(AddItemDialogComponent,
      {
        panelClass: 'fullscreen-dialog',
        data: {
          selectedItem: this.selectedItem
        } as EditItemDialogDataModel,
      });
  }
}
