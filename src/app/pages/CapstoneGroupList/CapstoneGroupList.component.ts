import { Component, OnInit } from '@angular/core';
import { Titles } from 'src/app/models/titles';
import { PanelsInterface, TitlesInterface } from './titles';
import { TitlesService } from 'src/app/services/titles.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tables',
  templateUrl: './CapstoneGroupList.component.html',
  styleUrls: ['./CapstoneGroupList.component.scss']
})
export class CapstoneGroupList {

  titleArray: Array<Titles> = []
  user_type = localStorage.getItem('user_type')

  titleString: string = "";
  titleObject: Titles = {
    "id": 0,
    "group_name": "",
    "section": "",
    "adviser": "",
    "panels": "",
    "titles": "",
    "grades": "",
    "comments": "",
    "createdAt": "",
    "updatedAt": "",
    "user_id": 0,
    "coordinator_requests": "",
  };
  titlesArray: Array<TitlesInterface> = []
  panelsArray: Array<PanelsInterface> = []
  titlesScoreObject = {
    title_1: 0,
    title_2: 0,
    title_3: 0
  }
  groupArray: Array<Titles> = []
  allGroupArray: Array<Titles> = []
  constructor(private titlesService: TitlesService, private router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('user_type') === 'capstone_group') {
      this.titlesService.getByUserId(parseInt(localStorage.getItem('uid')!)).subscribe(
        response => {
          this.titleObject = response
          this.titlesArray = JSON.parse(response.titles!);
          this.titlesScoreObject = JSON.parse(response.grades!)
          console.log(response)
        },
        error => {
          console.log(error)
        }
      )
    }

    if (localStorage.getItem('user_type') === 'admin') {

      this.titlesService.getAll().subscribe(
        response => {
          console.log(response)
          // this.groupArray = tempGroup
          this.allGroupArray = response
        }
      )
    }

    if (localStorage.getItem('user_type') === 'faculty') {

      this.titlesService.getAll().subscribe(
        response => {
          console.log(response)
          // this.groupArray = tempGroup
          this.allGroupArray = response
        }
      )
    }

    if (localStorage.getItem('user_type') === 'capstone_coordinator') {

      this.titlesService.getAll().subscribe(
        response => {
          console.log(response)
          // this.groupArray = tempGroup
          this.allGroupArray = response
        }
      )
    }

    if (localStorage.getItem('user_type') === 'capstone_group') {

      this.titlesService.getAll().subscribe(
        response => {
          console.log(response)
          // this.groupArray = tempGroup
          for (let data of response) {
            if (data.user_id === parseInt(localStorage.getItem('uid'))) {
              this.allGroupArray.push(data)
            }
          }

        }
      )
    }
  }
  viewEntry(data: any): void {
    const stringifyVar = JSON.stringify(data)
    console.log(data)
    this.router.navigate(['/capstoneGroup', stringifyVar])
  }

  goToAddTitle(): void {
    if (JSON.parse(this.titleObject.titles!).length == 3) {
      Swal.fire({
        icon: "error",
        text: 'Maximum of 3 titles only'
      })
    } else {
      this.router.navigate(['/add-entry', JSON.stringify(this.titleObject)])
    }

  }

  goToViewTitle(index: number): void {
    this.router.navigate(['/view-title', JSON.stringify(this.titleObject), index])
  }

  downloadFile(data: any): void {
    saveAs(data.file, 'download.pdf')
  }

  // downloadFile(): void {
  //   const url = URL.createObjectURL(new Blob([this.capsuleData.blob_file]));
  //   const link = document.createElement('a');
  //   link.download = `${this.capsuleData.title}.pdf`;
  //   link.href = url;
  //   link.click();

  //   console.log(this.capsuleData.blob_file)
  //   console.log(url)
  // }

  request(id: any, currentRequest: any): void {
    var tempArr = JSON.parse(currentRequest)
    tempArr.push({ uid: parseInt(localStorage.getItem('uid')!), name: localStorage.getItem('name') })
    this.titlesService.update(parseInt(id), {
      requests: JSON.stringify(tempArr)
    }).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          text: 'Request sent to become adviser'
        })
      }
    )
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
