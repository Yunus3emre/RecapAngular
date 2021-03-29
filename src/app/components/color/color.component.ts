import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  currentColor: Color | null;
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data
    })
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
    console.log(color.name);

  }

  getCurrentColorClass(color: Color) {

    if (color == { colorId: 0, name: "" }) {
      return "list-group-item"
    } else {
      if (color == this.currentColor) {
        return "list-group-item active cursorPointer"
      } else {
        return "list-group-item cursorPointer"
      }
    }
  }

  setAllColor() {
    this.currentColor = null;
  }

  getAllColorClass() {
    if (!this.currentColor) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

}
