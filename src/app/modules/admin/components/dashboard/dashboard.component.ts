import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private items: string[] = ['as', 'as', 'as', 'as', 'as', 'as', 'as', 'as', 'as', 'as'];
  public get getItems(): string[] {
    return this.items
  };

  constructor(private readonly dialog: MatDialog) {

  }

  public openAddItemDialog() {
    this.dialog.open(AddItemDialogComponent, {
      panelClass: 'fullscreen-dialog',
    });
  }
}
