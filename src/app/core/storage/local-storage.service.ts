import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): unknown {
    return localStorage.getItem(key);
  }
}
