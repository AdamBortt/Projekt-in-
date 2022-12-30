import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service';

@Component({
  selector: 'app-initials-form',
  templateUrl: './initials-form.component.html',
  styleUrls: ['./initials-form.component.css']
})
export class InitialsFormComponent implements OnInit{

  constructor(public service: service) {  }

  showCharacterSelect: boolean = false;
  
  ngOnInit(): void {
    this.service.checkValue();
    this.service.selectedIcon = null;
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
