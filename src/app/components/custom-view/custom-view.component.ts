import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/Data.service';

@Component({
  selector: 'app-custom-view',
  templateUrl: './custom-view.component.html',
  styleUrls: ['./custom-view.component.css']
})
export class CustomViewComponent {

  constructor(public DataService: DataService) {  }

  onFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.DataService.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
    this.DataService.initialsSize = 225 - this.DataService.imgSize
    this.DataService.downloadButtonEnabled = false
  }

}
