import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartTypeRegistry, registerables } from 'chart.js';
import { ChartDataModel } from '../../interfaces/charts/chart-data.model';
import { ChartsService } from 'src/app/modules/analitycs/services/charts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chart') ctx!: ElementRef;

  @Input() type: keyof ChartTypeRegistry = 'line';
  @Input() data: Array<ChartDataModel> = [];
  @Input() yBeginAtZero: boolean = true;
  @Input() xBeginAtZero: boolean = true;
  @Input() maxPoints: number = 10;
  @Input() width: number = 100;
  @Input() height: number = 100;
  
  public chart: Chart | null = null;

  private secondsChange$: Subscription | null = null;
  private chartConfig: ChartConfiguration;

  constructor(private readonly chartsService: ChartsService) {
    this.chartConfig = this.generateChartConfig();
  }

  ngAfterViewInit(): void {
    Chart.register(...registerables);

    this.chart = new Chart(this.ctx.nativeElement.getContext('2d'), this.chartConfig);
    this.ctx.nativeElement.style.backgroundColor = 'white';
    this.chart.data.labels = this.generateXLabels();
    this.secondsChange$ = this.chartsService.seconds$.subscribe(() => {
      if (!this.chart) {
        return;
      }

      this.chart.data.datasets = this.data;
      this.chart.update();
    });
  }

  private generateChartConfig(): ChartConfiguration {
    return {
      type: 'line',
      data: this.generateChartData(),
      options: {
        animation: false,
        scales: {
          x: {
            ticks: {
              callback: (tick: any) => (Number(tick) % 5 === 0 ? `-${this.maxPoints - tick}` : null) // Replace null with "" to show gridline
            }
          },
          y: {
            min: 0,
            max: 10
          }
        }
      }
    }
  }

  private generateChartData(): ChartData {
    return {
      labels: this.generateXLabels(),
      datasets: this.data
    }
  }

  private generateXLabels(): Array<string> {
    return Array.from({ length: this.maxPoints }, (_, index) => (index + 1).toString());
  }

  ngOnDestroy(): void {
    if (this.secondsChange$) {
      this.secondsChange$.unsubscribe();
    }
  }
}
