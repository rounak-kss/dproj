import {Routes} from '@angular/router';
import { AcademicsComponent } from './academics/academics.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ACADEMICS_ROUTES } from './academics/academics.routing';

export const ADMIN_ROUTES: Routes = [
    { path: 'academics', component: AcademicsComponent, children: ACADEMICS_ROUTES },
    { path: 'student', component: StudentComponent },
    { path: 'teacher', component: TeacherComponent }
];