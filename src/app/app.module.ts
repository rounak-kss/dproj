import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { routing } from './app.routing';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './components/admin.component';
import { FeestructureComponent } from './components/academics/feestructure/feestructure.component';
import { SyllabusComponent } from './components/academics/syllabus/syllabus.component';
import { TimetableComponent } from './components/academics/timetable/timetable.component';
import { AcademicyearComponent } from './components/academics/academicyear/academicyear.component';
import { AcademicsNavigatorComponent } from './components/academics/academics-navigator/academics-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademicsComponent,
    StudentComponent,
    TeacherComponent,
    LoginComponent,
    AdminComponent,
    FeestructureComponent,
    SyllabusComponent,
    TimetableComponent,
    AcademicyearComponent,
    AcademicsNavigatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
