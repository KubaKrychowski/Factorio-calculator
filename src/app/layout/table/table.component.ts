import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  private exampleData: MatTableDataSource<any> = new MatTableDataSource<any>();
  private displayedColumns: string[] = ['name', 'powerConsumption', 'ironOreAmount', 'cooperOreAmount'];
  private columnsTranslations: string[] = [
    'ANALYTICS.TABLE.COLUMNS.NAME',
    'ANALYTICS.TABLE.COLUMNS.POWER_CONSUMPTION',
    'ANALYTICS.TABLE.COLUMNS.IRON_ORE',
    'ANALYTICS.TABLE.COLUMNS.COOPER_ORE'
  ];

  @Input('data') set setData(data: any) {
    this.exampleData = data;
  }

  @Input('dispplayedColumns') set setDisplayedColumns(displayedColumns: string[]) {
    this.displayedColumns = displayedColumns;
  }

  @Input('columngsTranslatoions') set setColumnsTranslations(columnsTranslations: string[]) {
    this.columnsTranslations = columnsTranslations;
  }

  public get getData(): MatTableDataSource<any> {
    return this.exampleData;
  }

  public get getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public get getColumnsTranslations(): string[] {
    return this.columnsTranslations;
  }

  constructor() {
    this.exampleData.data = [
      {
        name: 'struct 1',
        powerConsumption: 32,
        ironOreAmount: 6,
        cooperOreAmount: 5
      },
      {
        name: 'struct 1',
        powerConsumption: 32,
        ironOreAmount: 6,
        cooperOreAmount: 5
      },
      {
        name: 'struct 1',
        powerConsumption: 32,
        ironOreAmount: 6,
        cooperOreAmount: 5
      },
      {
        name: 'struct 1',
        powerConsumption: 32,
        ironOreAmount: 6,
        cooperOreAmount: 5
      }
    ];
  }
}
