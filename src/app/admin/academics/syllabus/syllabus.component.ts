import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsyllabusComponent } from './newsyllabus/newsyllabus.component';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css'],
})
export class SyllabusComponent implements OnInit {
  showTab: number = 0;
 ngOnInit() {
  }
  ToggleTab(view) {
    this.showTab = view;
  }
}
