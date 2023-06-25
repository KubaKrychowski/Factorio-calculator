import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AppService } from './core/app-service/app.service';
import { NotificationService } from './core/notification-service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Factiorio-caclculator';
  currentNotification$: Observable<string | null>;

  public get isLoading(): boolean {
    return this.appService.loading;
  }

  constructor(private readonly appService: AppService, private readonly notificationService: NotificationService) {
    this.currentNotification$ = this.notificationService.currentNotification$;
  }
}
