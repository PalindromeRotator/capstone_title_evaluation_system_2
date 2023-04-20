import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tables',
  templateUrl: './CapstoneTitles.component.html',
  styleUrls: ['./CapstoneTitles.component.scss']
})
export class CapstoneTitles implements OnInit {

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
