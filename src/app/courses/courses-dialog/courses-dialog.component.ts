import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/app/Models/course';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {

  courseForm: FormGroup;

  ngOnInit(): void {};

  constructor(private fb: FormBuilder, 
    private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private course?: Course){
    this.courseForm = this.fb.group({
      name: ['',Validators.required],
      capacity: ['',Validators.maxLength(2)],
      hours: ['',[Validators.required,Validators.maxLength(3),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    })

    if(this.course){
    this.courseForm.patchValue(this.course);
    }
  }

  

  onSubmit(): void {
    if(this.courseForm.invalid){
      this.courseForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.courseForm.value);

    }
    
  }
}
