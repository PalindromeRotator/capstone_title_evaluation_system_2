import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './AdminResetPass.component.html',
  styleUrls: ['./AdminResetPass.component.scss']
})
export class AdminResetPass implements OnInit {

  ngOnInit() {}
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  

}
