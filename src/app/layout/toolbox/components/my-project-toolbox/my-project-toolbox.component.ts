import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuildingConnectionModel } from 'src/app/modules/shared/interfaces/factory-project/building-connection.model';
import { FactoryProjectService } from 'src/app/modules/shared/services/factory-project.service';
import { AddConnectionDialogComponent } from '../add-connection-dialog/add-connection-dialog.component';

@Component({
  selector: 'app-my-project-toolbox',
  templateUrl: './my-project-toolbox.component.html',
  styleUrls: ['./my-project-toolbox.component.scss']
})
export class MyProjectToolboxComponent {

  public get getBuildingConnections(): BuildingConnectionModel[] {
    return [];
    //return this.factoryProjectService.buildingConnections;
  }
  constructor(
    private readonly factoryProjectService: FactoryProjectService,
    private readonly matDialog: MatDialog) {
  }

  public openAddConnectionDialog(): void {
    this.matDialog.open(AddConnectionDialogComponent, {
      panelClass: 'fullscreen-dialog'
    });
  }
}
