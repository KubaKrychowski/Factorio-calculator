import { Injectable } from '@angular/core';
import { HttpMethods } from './enums/http-methods.enum';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { NotificationService } from '../notification-service/notification.service';
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private readonly http: HttpClient,private readonly notificationService: NotificationService) { }

  public sendRequest<T>(url: string, method: HttpMethods, body?: T) {
    switch (method) {
      case HttpMethods.GET: {
        return this.http.get<T>(`${environment.API_URL}/${url}`).pipe(share());
      }

      case HttpMethods.POST: {
        if(!body){
          this.notificationService.notifyError();
          return;
        }

        return this.http.post<T>(`${environment.API_URL}/${url}`, body as T).pipe(share());
      }

      case HttpMethods.PUT: {
        return this.http.put(`${environment.API_URL}/${url}`, body).pipe(share());
      }

      case HttpMethods.DELETE: {
        return this.http.delete(`${environment.API_URL}/${url}`).pipe(share());
      }

      case HttpMethods.PATCH: {
        return this.http.patch(`${environment.API_URL}/${url}`, body).pipe(share());
      }
    }
  }
}
