export class service {
  downloadButtonEnabled: boolean = true;
  selectorButtonEnabled: boolean = true;
  
  firstNameLetter: string = "";
  firstLastNameLetter: string = "";
  selectedIcon: string = "";
  imgSize: number = 175;
  initialsSize: number = 225-this.imgSize;
  imageUrl: string;

  currentBodyIndex: number = 0;
  currentHairIndex: number = 0;

  clearPreview() {
    this.imageUrl=""
    this.firstNameLetter=""
    this.firstLastNameLetter=""
    this.selectorButtonEnabled = true
  }
}