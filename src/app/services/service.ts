export class service {
  downloadButtonEnabled: boolean = true;
  selectorButtonEnabled: boolean = true;
  
  firstNameLetter: string = "";
  firstLastNameLetter: string = "";
  selectedIcon: string = "";
  size: number = 100;

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