import { BehaviorSubject, Observable, TimeInterval } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class ChartsService {
  public seconds$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public timer: any;

  public seconds: number = 0;

  public startInterval() {
    this.timer = setInterval(() => {
      this.seconds++;
      this.seconds$.next(this.seconds);
    }, 500);
  }

  public stopInterval() {
    clearInterval(this.timer);
  }
}
