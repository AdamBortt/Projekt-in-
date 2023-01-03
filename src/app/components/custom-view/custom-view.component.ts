import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service';

@Component({
  selector: 'app-custom-view',
  templateUrl: './custom-view.component.html',
  styleUrls: ['./custom-view.component.css']
})
export class CustomViewComponent {

  constructor(public service: service) {  }

  onFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.service.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
    this.service.initialsSize = 225 - this.service.imgSize
    this.service.downloadButtonEnabled = false
  }

}
