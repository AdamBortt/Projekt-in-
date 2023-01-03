import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service';

@Component({
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.css']
})
export class TemplateViewComponent implements OnInit{

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
      this.service.checkValue()
    }
    else 
    {
      this.service.initialsSize = 225 - this.service.imgSize;
      this.service.downloadButtonEnabled = false
    }
  }
}
