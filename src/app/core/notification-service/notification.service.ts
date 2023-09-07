import { Injectable } from '@angular/core';
import { Subject, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public currentNotification$: Subject<string | null> = new Subject<string | null>();

  public notifyError() {
    this.currentNotification$.next('error');

    setTimeout(() => {
      this.currentNotification$.next(null);
    }, 3000);
  }

  public notifySuccess(msg?: string) {
    this.currentNotification$.next(msg ?? 'success');

    setTimeout(() => {
      this.currentNotification$.next(null);
    }, 3000);
  }
}
