export class service {
  downloadButtonEnabled: boolean = true;
  selectorButtonEnabled: boolean = true;
  
  firstNameLetter: string = "";
  firstLastNameLetter: string = "";

  backLightness: number = 1;
  fontLightness: number = 0;
  r: number;
  g: number;
  b: number;
  warning: boolean = false;

  imgSize: number = 175;
  initialsSize: number = 150;
  imageUrl: string;

  currentBodyIndex: number = 0;
  currentHairIndex: number = 0;

  clearPreview() {
    this.imageUrl=""
    this.firstNameLetter=""
    this.firstLastNameLetter=""
    this.selectorButtonEnabled = true
  }
  checkValue() {
    if (this.firstNameLetter == "" && this.firstLastNameLetter == "")
    this.downloadButtonEnabled = true;
    else
    this.downloadButtonEnabled = false;
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
    if ( diff >= -0.15 && diff <= 0.15 ) {
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
      document.getElementById('avatar').style.borderRadius = "100%";
    }
  }
}