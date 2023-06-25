import { HttpMethods } from 'src/app/core/http-serivce/enums/http-methods.enum';
import { AddNewItemRequestDto } from '../interfaces/requests/add-new-item-request.dto';
import { HttpService } from './../../../core/http-serivce/http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {

  constructor(private readonly http: HttpService) {
  }

  public addNewItem(request: AddNewItemRequestDto): Observable<AddNewItemRequestDto> {
    return this.http.sendRequest<AddNewItemRequestDto>('items', HttpMethods.POST, request) as Observable<AddNewItemRequestDto>;
  }
}
