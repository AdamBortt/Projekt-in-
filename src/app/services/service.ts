export class service {
  downloadButtonEnabled: boolean = true;
  selectorButtonEnabled: boolean = true;
  
  firstNameLetter: string = "";
  firstLastNameLetter: string = "";
  selectedIcon: string = "";
  size: number = 100;

  imageUrl: string

  clearPreview() {
    this.imageUrl=""
    this.firstNameLetter=""
    this.firstLastNameLetter=""
  }
}