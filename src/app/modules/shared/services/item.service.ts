import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http-serivce/http.service';
import { GetAllItemsResponseDto } from '../../admin/interfaces/responses/get-all-items-response.dto';
import { HttpMethods } from 'src/app/core/http-serivce/enums/http-methods.enum';

@Injectable()

export class ItemService {

  constructor(private readonly http: HttpService) {
  }

  public getAllItems(): Observable<GetAllItemsResponseDto> {
    return this.http.sendRequest('items', HttpMethods.GET) as Observable<GetAllItemsResponseDto>;
  }

}
