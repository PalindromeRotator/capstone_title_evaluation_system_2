import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { Members } from './members';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { TitlesService } from 'src/app/services/titles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userData: Users = {
    name: '',
    email: '',
    section: '',
    password: '',
    user_define_id: '',
    user_type: 'capstone_group',
    expertise: '',
    members: ''
  };

  memberData: Members = {
    fullname: '',
    section: '',
  }
  memberDataEdit: Members = {
    fullname: '',
    section: '',
  }
  memberArray: Array<Members> = []
  user_type = localStorage.getItem('user_type')
  constructor(private usersService: UsersService, private router: Router, private titlesService: TitlesService) { }

  ngOnInit() {
    this.usersService.getById(localStorage.getItem('uid')).subscribe(
      response => {
        this.userData = response;
        this.memberArray = JSON.parse(response.members!)
      }
    )
  }

  saveChanges(): void {
    this.usersService.update(localStorage.getItem('uid'), this.userData).subscribe(
      subscribe => {

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Successfully Edited Data'
        }
        ).then(() => {
          localStorage.setItem('name', this.userData.name!);
          localStorage.setItem('email', this.userData.email!);
        })
      }
    )
  }

  AddMember(): void {
    if (this.memberArray.length >= 8) {
      Swal.fire({
        icon: 'error',
        text: 'Maximum of 8 members only'
      })
    }
    this.memberArray.push(this.memberData);
    this.usersService.update(localStorage.getItem('uid'), { members: JSON.stringify(this.memberArray) }).subscribe(
      reponse => {
        this.usersService.getById(localStorage.getItem('uid')).subscribe(
          response => {
            this.userData = response;
            this.memberArray = JSON.parse(response.members!)
            this.closePopup()
          }
        )
      }
    )
  }

  deleteMember(index: any): void {
    this.memberArray.splice(index, 1)
    console.log(this.memberArray)
    this.usersService.update(localStorage.getItem('uid'), { members: JSON.stringify(this.memberArray) }).subscribe(
      reponse => {
        this.usersService.getById(localStorage.getItem('uid')).subscribe(
          response => {

            Swal.fire({
              icon: 'success',
              text: 'Member Deleted'
            }).then(() => {
              this.userData = response;
              this.memberArray = JSON.parse(response.members!)
              this.closePopup()
            })
          }
        )
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
