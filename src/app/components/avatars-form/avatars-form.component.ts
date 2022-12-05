import { Component, OnInit } from '@angular/core';
import { service } from '../../services/service';

import { iavatar } from '../../interfaces/iavatar';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-avatars-form',
  templateUrl: './avatars-form.component.html',
  styleUrls: ['./avatars-form.component.css']
})
export class AvatarsFormComponent implements OnInit {

  icons: iavatar[] = [
    {image: 'assets/icons/icon1.png'},
    {image: 'assets/icons/icon2.png'},
    {image: 'assets/icons/icon3.png'},
    {image: 'assets/icons/icon4.png'},
    {image: 'assets/icons/icon5.png'},
    {image: 'assets/icons/icon6.png'},
    {image: 'assets/icons/icon7.png'}
  ]

  constructor(public service: service) { }

  ngOnInit(): void {
    this.service.firstLastNameLetter = "";
    this.service.firstNameLetter = "";
    this.service.buttonEnabled = true;
  }
  selectIcon(icon: string) {
    this.service.selectedIcon = icon;
    this.checkValue();
  }

  checkValue() {
    if (this.service.selectedIcon == "")
    this.service.buttonEnabled = true;
    else
    this.service.buttonEnabled = false;
  }
  getSliderTickInterval(slider: MatSliderChange) {
    this.service.size = slider.value;
  }

  squareChange(event: boolean) {
    if (event == true) {
      document.getElementById('avatar').style.borderRadius = "0px"; 
    }
    else {
      document.getElementById('avatar').style.borderRadius = "100px";
    }
  }
  colorChange(event: any) {
    document.getElementById('avatar').style.backgroundColor = (event.target.value);
  }

}
