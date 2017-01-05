import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { LoginComponent } from './login/login.component';
import { ADMIN_ROUTES } from './components/admin.routing';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'admin', redirectTo: 'admin/academics' },
    { path: 'admin', component: AdminComponent, children: ADMIN_ROUTES }
];
export const routing = RouterModule.forRoot(APP_ROUTES);