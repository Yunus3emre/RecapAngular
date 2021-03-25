import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1: any = { carId: 1, modelYear: 2021, dailyPrice: 150, description: "Dizel" }
  car2: any = { carId: 2, modelYear: 2021, dailyPrice: 160, description: "Benzin" }
  car3: any = { carId: 3, modelYear: 2020, dailyPrice: 150, description: "Otomatik" }

  cars:Car[] = [this.car1, this.car2, this.car3]

  constructor() { }

  ngOnInit(): void {
  }

}
