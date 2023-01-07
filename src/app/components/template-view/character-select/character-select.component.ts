import { Component } from '@angular/core';
import { DataService } from 'src/app/services/Data.service';
import { TemplatesService } from 'src/app/services/Templates.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent {

  constructor(public DataService: DataService, public templateService: TemplatesService) {}

  sizeAdjust() {
    if (this.DataService.selectorButtonEnabled == true)
    {
      this.DataService.initialsSize = 150;
      this.DataService.checkValue()
    }
    else 
    {
      this.DataService.initialsSize = 225 - this.DataService.imgSize;
      this.DataService.downloadButtonEnabled = false
    }
  }

  nextHair() {
      this.DataService.currentHairIndex++;
      if (this.DataService.currentHairIndex >= this.templateService.hairs.length) {
        this.DataService.currentHairIndex = 0;
      }
  }

  previousHair() {
    this.DataService.currentHairIndex--;
    if (this.DataService.currentHairIndex <= -1) {
      this.DataService.currentHairIndex = 4;
    }
}

  nextBody() {
    this.DataService.currentBodyIndex++;
    if (this.DataService.currentBodyIndex >= this.templateService.bodies.length) {
      this.DataService.currentBodyIndex = 0;
    }
  }

  previousBody() {
    this.DataService.currentBodyIndex--;
    if (this.DataService.currentBodyIndex <= -1) {
      this.DataService.currentBodyIndex = 4;
    }
}

}
