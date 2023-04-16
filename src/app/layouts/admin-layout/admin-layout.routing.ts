import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { CapstoneGroup } from '../../pages/CapstoneGroup/CapstoneGroup.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { PanelsAndAdviser } from '../../pages/PanelsAndAdviser/PanelsAndAdviser.component';
import { CapstoneGroupView } from 'src/app/pages/CapstoneGroupView/CapstoneGroupView.component';
import { PanelsAndAdviserView } from 'src/app/pages/PanelsAndAdviserView/PanelsAndAdviserView.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'capstoneGroup',   component: CapstoneGroup },
    { path: 'panelsandadviser',   component: PanelsAndAdviser },
    { path: 'capstonegroupview',   component: CapstoneGroupView },
    { path: 'panelsandadviserview',   component: PanelsAndAdviserView }
];
