import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { AppService } from './core/app-service/app.service';
import { NotificationService } from './core/notification-service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private currentNotification$: Subscription;

  public currentNotification: string | null = null;
  public get isLoading(): boolean {
    return this.appService.loading;
  }

  public get isLeftMenuHidden(): boolean {
    return this.appService.hideLeftMenu;
  }

  constructor(private readonly appService: AppService, private readonly notificationService: NotificationService) {
    this.currentNotification$ = this.notificationService.currentNotification$.subscribe(message => this.currentNotification = message);
  }

  ngOnDestroy() {
    this.currentNotification$.unsubscribe();
  }
}
