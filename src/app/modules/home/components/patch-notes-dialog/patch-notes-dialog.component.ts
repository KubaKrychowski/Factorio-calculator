import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PatchNoteModel } from 'src/app/modules/shared/interfaces/landing-page/patch-note.model';
import { getPatchNotes } from 'src/app/core/db/patch-notes';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patch-notes-dialog',
  templateUrl: './patch-notes-dialog.component.html',
  styleUrls: ['./patch-notes-dialog.component.scss']
})
export class PatchNotesDialogComponent implements OnInit {

  public get patchNotes(): Observable<PatchNoteModel> {
    return getPatchNotes;
  }

  constructor(private readonly matDialogRef: MatDialogRef<PatchNotesDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.matDialogRef.close();
  }

}
