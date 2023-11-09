import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/Models/course';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  dataSource: Course[] = [];

  @Output()
  deleteCourse = new EventEmitter<number>()

  @Output()
  editCourse = new EventEmitter<Course>()


  displayedColumns = ['id','name','capacity','hours','actions'];

}
