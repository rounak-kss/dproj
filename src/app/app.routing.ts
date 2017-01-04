import {Routes, RouterModule} from '@angular/router';
import { AcademicsComponent } from './components/academics/academics.component';
const APP_ROUTES: Routes = [
    { path: '', component: AcademicsComponent },
    { path: 'academics', component: AcademicsComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);