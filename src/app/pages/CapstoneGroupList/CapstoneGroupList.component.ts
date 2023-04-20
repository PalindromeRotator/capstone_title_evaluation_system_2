import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './CapstoneGroupList.component.html',
  styleUrls: ['./CapstoneGroupList.component.scss']
})
export class CapstoneGroupList implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
