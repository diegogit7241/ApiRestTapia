import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/Models/course';
import { CoursesDialogComponent } from '../courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses: Course[] = [];

  constructor(private matDialog: MatDialog,
    private courseService: CourseService){
    this.courses = this.courseService.getCourses();
  }


  openCoursesDialog(): void{
    this.matDialog.open(CoursesDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) =>{
        console.log(v);
        if(!!v){
          this.courses = [
            ...this.courses,
            {
              ...v,
              id: new Date().getTime(),
            }
          ]
        }
      }
    });
  }

   onEditCourse(course: Course): void {
 this.matDialog.open(CoursesDialogComponent,{data: course,}).afterClosed().subscribe({
   next: (v) => {
     if(!!v){
       const arrayNuevo = [...this.courses]

       const indicetoEdit = arrayNuevo.findIndex((u) => u.id === course.id)
       arrayNuevo[indicetoEdit]  = {...arrayNuevo[indicetoEdit], ...v};

      this.courses = [...arrayNuevo]
     }
   }
 })
   }

   onDeleteCourse(courseId: number):void{
     if(confirm("Esta seguro que desea eliminar este registro?"))
     this.courses = this.courses.filter((u) =>u.id !== courseId)
       }

}
