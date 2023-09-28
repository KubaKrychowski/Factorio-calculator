import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-opener',
  templateUrl: './dialog-opener.component.html',
  styleUrls: ['./dialog-opener.component.scss']
})
export class DialogOpenerComponent {

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly matDialog: MatDialog) {
    this.matDialog.open(this.activatedRoute.snapshot.data['component'], {
      panelClass: 'fullscreen-dialog'
    });

  }
}
