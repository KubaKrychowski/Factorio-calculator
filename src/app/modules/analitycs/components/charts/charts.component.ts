import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartDataModel } from 'src/app/modules/shared/interfaces/charts/chart-data.model';
import { getRandomInt } from 'src/app/modules/shared/utils/get-random-int';
import { ChartsService } from '../../services/charts.service';
import { ItemService } from 'src/app/modules/shared/services/item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnDestroy {
  public chartData: Array<ChartDataModel> = [
    {
      label: 'drills',
      data: []
    }
  ];

  public maxPoints: number = 20;
  public seconds$: Subscription | null = null;

  constructor(private readonly chartsService: ChartsService, private readonly itemService: ItemService) {
  }

  ngOnInit(): void {
    this.seconds$ = this.chartsService.seconds$.subscribe(() => {
      this.chartData[0].data.push(this.calculatePolutionAtSecond(10));
      if (this.chartData[0].data.length > 20) {
        this.chartData[0].data.shift();
      } else {
        this.chartData[0].data.push(this.calculatePolutionAtSecond(10));
      }
    });
  }

  calculatePolutionAtSecond(seconds: number): number {
    return getRandomInt(seconds);
  }

  ngAfterViewInit(): void {
    this.chartsService.startInterval();
  }

  ngOnDestroy(): void {
    this.chartsService.stopInterval();

    if (this.seconds$) {
      this.seconds$?.unsubscribe();
    }

  }
}
