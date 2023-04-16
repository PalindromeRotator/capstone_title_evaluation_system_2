import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './PanelsAndAdviserView.component.html',
  styleUrls: ['./PanelsAndAdviserView.component.scss']
})
export class PanelsAndAdviserView implements OnInit {

  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
