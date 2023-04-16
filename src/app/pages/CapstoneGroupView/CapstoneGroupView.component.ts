import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './CapstoneGroupView.component.html',
  styleUrls: ['./CapstoneGroupView.component.scss']
})
export class CapstoneGroupView implements OnInit {

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