import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { AppComponent } from './app.component';
import { AcademicsComponent } from './admin/academics/academics.component';
import { routing } from './app.routing';
import { StudentComponent } from './admin/student/student.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FeestructureComponent } from './admin/academics/feestructure/feestructure.component';
import { SyllabusComponent } from './admin/academics/syllabus/syllabus.component';
import { TimetableComponent } from './admin/academics/timetable/timetable.component';
import { AcademicyearComponent } from './admin/academics/academicyear/academicyear.component';
import { AcademicsNavigatorComponent } from './admin/academics/academics-navigator/academics-navigator.component';
import { DatabaseService } from './services/database.service';
import { HttpService } from './services/http.service';
import { NewsyllabusComponent } from './admin/academics/syllabus/newsyllabus/newsyllabus.component';
import { FeesParticularComponent } from './admin/academics/feestructure/fees-particular.component';


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
    NewsyllabusComponent,
    FeesParticularComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdlModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
