import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
import { DatabaseService } from 'app/services/database.service';

@Component({
  selector: 'app-newsyllabus',
  templateUrl: './newsyllabus.component.html',
  styles: []
})
export class NewsyllabusComponent implements OnInit {
  ifsuccess: boolean = false;
  newSyllabusForm: FormGroup;
  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.database.response.subscribe(data => this.ifsuccess = data.Success);
    this.newSyllabusForm = new FormGroup({
      'syllabus': new FormGroup({
        'standard': new FormControl('', Validators.required),
        'syllabusname': new FormControl('', Validators.required)
      }),
      'subjects': new FormArray([
        new FormGroup({
        'subjectname': new FormControl('', Validators.required),
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
  }
  addNewSubjectPart(index:number){
    (<FormArray>(<FormArray>(<FormArray>this.newSyllabusForm.controls['subjects'])
    .controls[index]).controls['subject-parts'])
    .push(new FormControl('', Validators.required));
  }
  removeSubjectPart(index1:number,index2:number) {
    (<FormArray>(<FormArray>(<FormArray>this.newSyllabusForm.controls['subjects'])
    .controls[index1]).controls['subject-parts'])
    .removeAt(index2);
  }
  removeSubject(index:number) {
    if(index > 0){
    (<FormArray>this.newSyllabusForm.controls['subjects'])
    .removeAt(index);
    }
  }
  onSubmit(){
    this.database.query({goto:"addsyllabus",data: this.newSyllabusForm.value});
  }
}
