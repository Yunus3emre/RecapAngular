import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  apiUrl = "https://localhost:44343/api/cars/getall"


  //carResponseModel:CarResponseModel{};

  cars: Car[]=[]

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log("init çalıştı")
    this.getCars();
  }

  getCars() {
    this.httpClient.get<CarResponseModel>(this.apiUrl)
      .subscribe((response) => { this.cars = response.data }
      );
  }

}
