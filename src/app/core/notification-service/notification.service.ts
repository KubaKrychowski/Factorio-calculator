import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public currentNotification$: Subject<string | null> = new Subject<string | null>();

  constructor() { }

  public notifyError() {
    this.currentNotification$.next('error');

    setInterval(() => {
      this.currentNotification$.next(null);
    }, 3000);
  }
}
