import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { service } from '../../../services/service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  constructor(public service: service) { }

  ngOnInit(): void {
  }

  download() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'Avatar.png';
      this.downloadLink.nativeElement.click();
  });
  }
}