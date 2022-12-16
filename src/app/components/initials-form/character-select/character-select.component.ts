import { Component, OnInit } from '@angular/core';
import { service } from 'src/app/services/service';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  constructor(public service: service) { }

  ngOnInit(): void {
  }

}
