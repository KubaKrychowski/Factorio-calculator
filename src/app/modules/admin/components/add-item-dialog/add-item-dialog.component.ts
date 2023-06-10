import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent {

  public submitForm() {
    console.log('form submission');
  }
}
