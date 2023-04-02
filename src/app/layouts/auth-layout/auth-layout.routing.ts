import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponentFaculty } from '../../pages/registerFaculty/registerFaculty.component';
import { RegisterComponentOptions  } from '../../pages/registerOptions/registerOptions.component';
import { RegisterComponentCapstoneG  } from '../../pages/registerCapstoneG/registerFaculty.component';
import { AdminResetPass  } from '../../pages/AdminResetPass/AdminResetPass.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'registerFaculty',       component: RegisterComponentFaculty },
    { path: 'registerOptions',       component: RegisterComponentOptions  },
    { path: 'registerCapstoneG',       component: RegisterComponentCapstoneG},
    { path: 'AdminResetPass',       component: AdminResetPass  }
    
];
