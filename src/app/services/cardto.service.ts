import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {

  apiUrl = "https://localhost:44343/api/"
  constructor(private httpClient: HttpClient) { }

  getCarDtos(): Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)

  }
}
