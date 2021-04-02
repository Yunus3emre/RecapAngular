import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';
import { CardtoService } from 'src/app/services/cardto.service';

@Component({
  selector: 'app-cardto',
  templateUrl: './cardto.component.html',
  styleUrls: ['./cardto.component.css']
})
export class CardtoComponent implements OnInit {

  carDtos:CarDto[]=[];
  constructor(private cardtoService: CardtoService,
    
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCarDtos()
  }
  getCarDtos(){
    this.cardtoService.getCarDtos().subscribe(response => {
      this.carDtos = response.data})
  }

}
