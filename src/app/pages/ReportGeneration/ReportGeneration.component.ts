import { Component, OnInit } from '@angular/core';
import {NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-tables',
  templateUrl: './ReportGeneration.component.html',
  styleUrls: ['./ReportGeneration.component.scss']
})


export class ReportGeneration implements OnInit {

  constructor() { }

  ngOnInit() { }
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  model: NgbDateStruct;
}
