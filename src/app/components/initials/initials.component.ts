import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/Data.service';

@Component({
  selector: 'app-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css']
})
export class InitialsComponent implements OnInit {

  nameValue: string = ''
  surnameValue: string = ''
  

  constructor(public DataService: DataService) { }

  ngOnInit(): void {
  }

  nameChange(event: any) {
    this.DataService.firstNameLetter = event.target.value.charAt(0).toUpperCase();
    console.log('name is: ', this.DataService.firstNameLetter);
    this.DataService.checkValue();
  }

  lastNameChange(event: any) {
    this.DataService.firstLastNameLetter = event.target.value.charAt(0).toUpperCase();
    console.log('name is: ', this.DataService.firstLastNameLetter);
    this.DataService.checkValue();
  }

  clearAll() {
    if (document.getElementById('initials')){
    document.getElementById('initials').style.color = '#000000';
    }
    document.getElementById('avatar').style.backgroundColor = `#ffffff`
    this.nameValue = ''
    this.surnameValue = ''
    this.DataService.defaultBlack = '#000000'
    this.DataService.defaultWhite = '#ffffff'
    this.DataService.imageDisplay = false;
    this.DataService.clearPreview()
  }
  
}