import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/Data.service';

@Component({
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.css']
})
export class TemplateViewComponent implements OnInit{

  constructor(public DataService: DataService) {  }

  showCharacterSelect: boolean = false;
  
  ngOnInit(): void {
    this.DataService.checkValue();
  }
}
