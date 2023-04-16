import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './CapstoneGroup.component.html',
  styleUrls: ['./CapstoneGroup.component.scss']
})
export class CapstoneGroup implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}