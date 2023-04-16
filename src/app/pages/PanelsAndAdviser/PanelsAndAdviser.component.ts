import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './PanelsAndAdviser.component.html',
  styleUrls: ['./PanelsAndAdviser.component.scss']
})
export class PanelsAndAdviser implements OnInit {

  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
