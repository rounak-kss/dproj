import {Routes} from '@angular/router';
import { AcademicyearComponent } from './academicyear/academicyear.component';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AcademicsNavigatorComponent } from './academics-navigator/academics-navigator.component'

export const ACADEMICS_ROUTES: Routes = [
    { path: '', component: AcademicsNavigatorComponent },
    { path: 'academicyear', component: AcademicyearComponent },
    { path: 'feestructure', component: FeestructureComponent },
    { path: 'syllabus', component: SyllabusComponent },
    { path: 'timetable', component: TimetableComponent}
];