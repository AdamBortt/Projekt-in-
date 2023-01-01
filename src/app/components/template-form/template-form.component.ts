import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit{

  constructor(public service: service) {  }

  showCharacterSelect: boolean = false;
  
  ngOnInit(): void {
    this.service.checkValue();
  }

  sizeChange(event: any) {
    this.service.imgSize = event.target.value;
    this.service.initialsSize = 225 - this.service.imgSize;
    console.log("size value is now" + this.service.imgSize)
  }

  sizeAdjust() {
    if (this.service.selectorButtonEnabled == true)
    {
      this.service.initialsSize = 150;
    }
    else 
    {
      this.service.initialsSize = 225 - this.service.imgSize;
    }
  }
}
