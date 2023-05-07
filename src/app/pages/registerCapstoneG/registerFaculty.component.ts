import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './registerCapstoneG.component.html',
  styleUrls: ['./registerCapstoneG.component.scss']
})
export class RegisterComponentCapstoneG {

  userData = {
    name: '',
    email: '',
    section: '',
    password: '',
    confirmPassword: '',
    user_define_id: '',
    user_type: 'capstone_group',
    expertise: '',
  };


  constructor(private router: Router, private usersService: UsersService) { }
  registerUser(): void {
    const data = {
      email: this.userData.email,
      name: this.userData.name,
      section: this.userData.section,
      password: this.userData.password,
      confirmPassword: this.userData.confirmPassword,
      user_type: this.userData.user_type,
      user_define_id: this.userData.user_define_id,
      is_verified: false,
      expertise: this.userData.expertise,
    };
    if (data.email !== '' && data.password !== '' && data.confirmPassword !== '' && data.name !== '') {
      if (this.userData.password === this.userData.confirmPassword) {
        const alphaRegex = /^[a-zA-Z]+$/;
        const numericRegex = /^[0-9]+$/;
        if (alphaRegex.test(this.userData.password) && numericRegex.test(this.userData.password)) {
          this.usersService.create(data)
            .subscribe(
              response => {
                this.router.navigate(['']);
              },
              error => {
                if (error.status == 500) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Name is already exist.`
                  })
                }
                if (error.status == 404)
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Username or Password is Incorrect.'
                  })
              });
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Forms cannot be empty ${data.email}`
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Password and confirm password is not matched.`
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Fields are epmty.`
      })
    }

  }

}
