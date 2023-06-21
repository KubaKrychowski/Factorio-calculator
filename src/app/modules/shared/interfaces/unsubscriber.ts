import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

export interface Unsubscriber extends OnDestroy {
  readonly subs: Subscription[];
}
