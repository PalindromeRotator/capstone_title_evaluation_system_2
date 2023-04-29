import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { CapstoneGroup } from '../../pages/CapstoneGroup/CapstoneGroup.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { PanelsAndAdviser } from '../../pages/PanelsAndAdviser/PanelsAndAdviser.component';
import { CapstoneGroupView } from 'src/app/pages/CapstoneGroupView/CapstoneGroupView.component';
import { PanelsAndAdviserView } from 'src/app/pages/PanelsAndAdviserView/PanelsAndAdviserView.component';
import { AssignCoordinator } from 'src/app/pages/AssignCoordinator/AssignCoordinator.component';
import { CapstoneTitles } from 'src/app/pages/CapstoneTitles/CapstoneTitles.component';
import { tables } from 'src/app/pages/tables/tables.component';
import { CapstoneGroupList } from 'src/app/pages/CapstoneGroupList/CapstoneGroupList.component';
import { ReportGeneration } from 'src/app/pages/ReportGeneration/ReportGeneration.component';
import { ContentManagement } from 'src/app/pages/ContentManagement/ContentManagement.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: tables },
    { path: 'icons', component: IconsComponent },
    { path: 'capstoneGroup/:titleData', component: CapstoneGroup },
    { path: 'panelsandadviser', component: PanelsAndAdviser },
    { path: 'capstonegroupview', component: CapstoneGroupView },
    { path: 'panelsandadviserview', component: PanelsAndAdviserView },
    { path: 'assigncoordinator', component: AssignCoordinator },
    { path: 'capstonetitles', component: CapstoneTitles },
    { path: 'capstonegrouplist', component: CapstoneGroupList },
    { path: 'reportgeneration', component: ReportGeneration },
    { path: 'contentmanagement', component: ContentManagement }
];
