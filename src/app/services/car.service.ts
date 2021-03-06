import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44343/api/"
  constructor(private httpClient: HttpClient) { }


  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)

  }
  getCarsByBrand(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getallbybrandid?id=" + brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)

  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getallbycolorid?id=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)

  }




  add(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/add",car)
  }

}
