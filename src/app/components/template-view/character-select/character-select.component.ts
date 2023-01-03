import { Component } from '@angular/core';
import { service } from 'src/app/services/service';
import { TemplatesService } from 'src/app/services/templates-service.service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent {

  constructor(public service: service, public templateService: TemplatesService) {}

  nextHair() {
      this.service.currentHairIndex++;
      if (this.service.currentHairIndex >= this.templateService.hairs.length) {
        this.service.currentHairIndex = 0;
      }
  }

  previousHair() {
    this.service.currentHairIndex--;
    if (this.service.currentHairIndex <= -1) {
      this.service.currentHairIndex = 4;
    }
}

  nextBody() {
    this.service.currentBodyIndex++;
    if (this.service.currentBodyIndex >= this.templateService.bodies.length) {
      this.service.currentBodyIndex = 0;
    }
  }

  previousBody() {
    this.service.currentBodyIndex--;
    if (this.service.currentBodyIndex <= -1) {
      this.service.currentBodyIndex = 4;
    }
}

}
