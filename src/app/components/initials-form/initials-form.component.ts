import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service';

@Component({
  selector: 'app-initials-form',
  templateUrl: './initials-form.component.html',
  styleUrls: ['./initials-form.component.css']
})
export class InitialsFormComponent implements OnInit{

  constructor(public service: service) {  }

  r: number;
  g: number;
  b: number;
  backLightness: number = 1;
  fontLightness: number = 0;
  warning: boolean = false;
  showCharacterSelect: boolean = false;
  
  ngOnInit(): void {
    this.checkValue();
    this.service.selectedIcon = null;
  }

  nameChange(event: any) {
    this.service.firstNameLetter = event.target.value.charAt(0).toUpperCase();
    console.log('name is: ', this.service.firstNameLetter);
    this.checkValue();
  }

  lastNameChange(event: any) {
    this.service.firstLastNameLetter = event.target.value.charAt(0).toUpperCase();
    console.log('name is: ', this.service.firstLastNameLetter);
    this.checkValue();
  }

  checkValue() {
    if (this.service.firstNameLetter == "" && this.service.firstLastNameLetter == "")
    this.service.buttonEnabled = true;
    else
    this.service.buttonEnabled = false;
  }

  colorChange(event: any) {
    this.hexToRgb(event.target.value);
    document.getElementById('avatar').style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
    this.backLightness = ((this.r * 0.2126) + (this.g * 0.7152) + (this.b * 0.0722)) / 255;
    this.fontCalculate()
  }
  
  fontCalculate() {
   console.log("backLightness: " + this.backLightness)
   console.log("fontLightness: " + this.fontLightness)
   var diff = this.backLightness - this.fontLightness;
   if ( diff >= -0.5 && diff <= 0.5 ) {
     console.log("font ledwo widoczny!")
     this.warning = true;
   }
   else
   {
     this.warning = false;
   }
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    this.r = parseInt(result[1], 16)
    this.g = parseInt(result[2], 16)
    this.b = parseInt(result[3], 16)
    console.log(this.r, this.g, this.b);
  }

  fontColorChange(event: any) {
    this.hexToRgb(event.target.value)
    this.fontLightness = ((this.r * 0.2126) + (this.g * 0.7152) + (this.b * 0.0722)) / 255;
    this.fontCalculate();
    document.getElementById('initials').style.color = event.target.value;
  }

  squareChange(event: boolean) {
    if (event == true) {
      document.getElementById('avatar').style.borderRadius = "0px"; 
    }
    else {
      document.getElementById('avatar').style.borderRadius = "100px";
    }
  }
}
