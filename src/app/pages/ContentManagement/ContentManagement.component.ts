import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './ContentManagement.component.html',
  styleUrls: ['./ContentManagement.component.scss']
})


export class ContentManagement implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() { }
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  coverPhotoUrl = 'url("assets/img/theme/BsuBackground.jpg")';
  serverUrl = 'https://example.com/upload';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('coverPhoto', file, file.name);

    this.http.post(this.serverUrl, formData).subscribe(
      (response) => {
        this.coverPhotoUrl = `url("${response['url']}")`;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
