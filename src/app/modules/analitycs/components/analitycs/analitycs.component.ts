import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsPages } from '../../enums/analytics-pages.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalitycsComponent implements OnDestroy {
  public tabIndex: number = 0;

  private subs: Subscription[] = [];

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
    this.subs.push(
      this.route.data.subscribe(data => this.tabIndex = data['tabIndex'])
    );
  }

  public onTabIndexChange(tabIndex: AnalyticsPages): void {
    let url: string;

    switch (tabIndex) {
      case AnalyticsPages.TABLE: {
        url = 'analytics/table';
        break;
      }
      case AnalyticsPages.CHARTS: {
        url = 'analytics/charts';
        break;
      }
    }

    this.router.navigate([url]);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
