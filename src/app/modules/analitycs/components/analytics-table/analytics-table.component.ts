import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnalyticsStructureSummaryModel } from '../../interfaces/analytics-structure-summary.model';

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.scss']
})
export class AnalyticsTableComponent {
  private data: MatTableDataSource<AnalyticsStructureSummaryModel> = new MatTableDataSource<AnalyticsStructureSummaryModel>();
  public addItem() { }
}
