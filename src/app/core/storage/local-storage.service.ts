import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem('', JSON.stringify(value));
  }
}
