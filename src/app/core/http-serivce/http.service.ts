import { Injectable } from '@angular/core';
import { HttpMethods } from './enums/http-methods.enum';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private readonly http: HttpClient) { }

  public sendRequest<T>(url: string, method: HttpMethods, body?: any) {
    switch (method) {
      case HttpMethods.GET: {
        return this.http.get<T>(url).pipe(share());
      }

      case HttpMethods.POST: {
        return this.http.post(url, body).pipe(share());
      }

      case HttpMethods.PUT: {
        return this.http.put(url, body).pipe(share());
      }

      case HttpMethods.DELETE: {
        return this.http.delete(url).pipe(share());
      }

      case HttpMethods.PATCH: {
        return this.http.patch(url, body).pipe(share());
      }
    }
  }
}
