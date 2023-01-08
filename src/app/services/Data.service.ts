import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  downloadButtonEnabled: boolean = true;
  selectorButtonEnabled: boolean = true;
  
  firstNameLetter: string = "";
  firstLastNameLetter: string = "";

  backLight: number = 1;
  fontLight: number = 0;
  r: number;
  g: number;
  b: number;
  warning: boolean = false;

  imgSize: number = 175;
  initialsSize: number = 150;
  imageUrl: string;
  imageDisplay: boolean

  currentBodyIndex: number = 0;
  currentHairIndex: number = 0;

  clearPreview() {
    this.imageUrl=""
    this.firstNameLetter=""
    this.firstLastNameLetter=""
    this.selectorButtonEnabled = true
    this.downloadButtonEnabled = true
    this.backLight = 1;
    this.fontLight = 0;
    this.LightCompare()
  }
  checkValue() {
    if (this.firstNameLetter == "" && this.firstLastNameLetter == "" && this.selectorButtonEnabled == true)
    this.downloadButtonEnabled = true;
    else
    this.downloadButtonEnabled = false;
  }

  backgroundColorChange(event: any) {
    this.hexToRgb(event.target.value);
    document.getElementById('avatar').style.backgroundColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
    this.backLight = ((this.r * 0.2126) + (this.g * 0.7152) + (this.b * 0.0722)) / 255;
    this.LightCompare()
  }

  fontColorChange(event: any) {
    this.hexToRgb(event.target.value)
    this.fontLight = ((this.r * 0.2126) + (this.g * 0.7152) + (this.b * 0.0722)) / 255;
    this.LightCompare();
    document.getElementById('initials').style.color = event.target.value;
  }
  
  hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    this.r = parseInt(result[1], 16)
    this.g = parseInt(result[2], 16)
    this.b = parseInt(result[3], 16)
  }

  LightCompare() {
    var diff = this.backLight - this.fontLight;
    if ( diff >= -0.15 && diff <= 0.15 ) {
      console.log("font ledwo widoczny!")
      this.warning = true;
    }
    else
    {
      this.warning = false;
    }
   }

  sizeChange(event: any) {
    this.imgSize = event.target.value;
    this.initialsSize = 225 - this.imgSize;
    console.log("size value is now" + this.imgSize)
  }

  squareChange(event: boolean) {
    if (event == true) {
      document.getElementById('avatar').style.borderRadius = "0px"; 
    }
    else {
      document.getElementById('avatar').style.borderRadius = "100%";
    }
  }
}