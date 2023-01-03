import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service';

@Component({
  selector: 'app-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css']
})
export class InitialsComponent implements OnInit {

  nameValue = ''
  surnameValue = ''
  defaultBlack = '#ffffff'
  defaultWhite = '#000000'

  constructor(public service: service) { }

  ngOnInit(): void {
  }

  nameChange(event: any) {
    this.service.firstNameLetter = event.target.value.charAt(0).toUpperCase();
    console.log('name is: ', this.service.firstNameLetter);
    this.service.checkValue();
  }

  lastNameChange(event: any) {
    this.service.firstLastNameLetter = event.target.value.charAt(0).toUpperCase();
    console.log('name is: ', this.service.firstLastNameLetter);
    this.service.checkValue();
  }

  clearAll(): void {
    document.getElementById('avatar').style.backgroundColor = `#ffffff`
    document.getElementById('initials').style.color = '#000000';
    this.nameValue = ''
    this.surnameValue = ''
    this.defaultBlack = '#ffffff'
    this.defaultWhite = '#000000'
    this.service.clearPreview()
  }
  
}