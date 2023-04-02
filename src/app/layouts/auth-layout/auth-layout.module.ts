import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponentFaculty } from '../../pages/registerFaculty/registerFaculty.component';
import { RegisterComponentOptions  } from '../../pages/registerOptions/registerOptions.component';
import { RegisterComponentCapstoneG} from '../../pages/registerCapstoneG/registerFaculty.component';
import { AdminResetPass} from '../../pages/AdminResetPass/AdminResetPass.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponentFaculty,
    RegisterComponentOptions ,
    RegisterComponentCapstoneG ,
    AdminResetPass
 
  ]
})
export class AuthLayoutModule { }
