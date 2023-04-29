import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './ContentManagement.component.html',
  styleUrls: ['./ContentManagement.component.scss']
})


export class ContentManagement implements OnInit {
  contentData = {
    file: localStorage.getItem('content-image') ?? "../../../assets/img/brand/favicon0.png",
    blob_file: null,
  }
  constructor(private http: HttpClient, private router: Router) { }

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

  onFileSelected(event: any): void {

    const file = event.target.files[0];
    this.previewImage(file);
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.contentData.file = reader.result as string; // Set the image source to display the preview
    };
  }
  saveChanges(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'Changing content will make you logged out, Are you sure?',
      showCancelButton: true,
      confirmButtonText: "OK",
      denyButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('content-image', this.contentData.file)
        localStorage.removeItem('name');
        localStorage.removeItem('uid',)
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('user_type')
        this.router.navigate(['/'])
      } else {

      }
    })

  }
}
