import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-newsyllabus',
  templateUrl: './newsyllabus.component.html',
  styles: []
})
export class NewsyllabusComponent implements OnInit {
  newSyllabusForm: FormGroup;
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.response.subscribe(
    data => console.log(data)
    );
    this.newSyllabusForm = new FormGroup({
      'syllabus': new FormGroup({
        'standard': new FormControl('standard'),
        'syllabusname': new FormControl('syllabusname')
      }),
      'subjects': new FormArray([
        new FormGroup({
        'subjectname': new FormControl('subjectname', Validators.required),
        'subject-parts': new FormArray([])
        })
      ])
    });
  }

  addNewSubject(){
    (<FormArray>this.newSyllabusForm.controls['subjects']).push( new FormGroup({
        'subjectname': new FormControl('', Validators.required),
        'subject-parts': new FormArray([])
        }));
    console.log(this.newSyllabusForm.controls['subjects'])
  }

  addNewSubjectPart(index){/*
    (<FormArray>this.newSyllabusForm.controls['subjects'].get(index).controls['subject-parts']).push( new FormGroup({
        'subjectname': new FormControl('', Validators.required),
        'subject-parts': new FormArray([])
        }));*/
  }

  onSubmit(){
    console.log(this.newSyllabusForm);
  }
}
