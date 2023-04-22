import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { CapstoneGroup } from '../../pages/CapstoneGroup/CapstoneGroup.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PanelsAndAdviser } from 'src/app/pages/PanelsAndAdviser/PanelsAndAdviser.component';
import { CapstoneGroupView } from 'src/app/pages/CapstoneGroupView/CapstoneGroupView.component';
import { PanelsAndAdviserView } from 'src/app/pages/PanelsAndAdviserView/PanelsAndAdviserView.component';
import { AssignCoordinator} from 'src/app/pages/AssignCoordinator/AssignCoordinator.component';
import { CapstoneTitles } from 'src/app/pages/CapstoneTitles/CapstoneTitles.component';
import {tables} from 'src/app/pages/tables/tables.component';
import { CapstoneGroupList } from 'src/app/pages/CapstoneGroupList/CapstoneGroupList.component';
import { ReportGeneration } from 'src/app/pages/ReportGeneration/ReportGeneration.component';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    tables, 
    IconsComponent,
    CapstoneGroup,
    PanelsAndAdviser,
    CapstoneGroupView,
    PanelsAndAdviserView,
    AssignCoordinator,
    CapstoneTitles,
    CapstoneGroupList,
    ReportGeneration
 
  ]
})

export class AdminLayoutModule {}
