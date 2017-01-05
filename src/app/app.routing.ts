import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ADMIN_ROUTES } from './admin/admin.routing';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin', redirectTo: 'admin/academics' },
    { path: 'admin', component: AdminComponent, children: ADMIN_ROUTES }
];
export const routing = RouterModule.forRoot(APP_ROUTES);