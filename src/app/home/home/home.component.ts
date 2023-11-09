import { Component, OnInit } from '@angular/core';
import { Observable, of, timeout, timer } from 'rxjs';
import { Alumno } from 'src/app/Models';
import { Course } from 'src/app/Models/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   mensaje = 'Cargando ...';
  loading = false;

  constructor(){
  const getStudentsPromise = new Promise((resolve, reject) =>{

    const students: Alumno[] =
    [{
      id:1,
      name: 'diego',
      lastName: 'tapia',
      country: 'chile',
      email: 'correo@gmail.com',
      phone: '97185913',
      password:'12334',
      token:'adasd'
    }];
    
    setTimeout(() => {
      resolve(students)
    }, 5000);
       
  });

  const getCoursesPromise = new Promise((resolve, reject) =>{

    const courses: Course[] =
    [{
      id:1,
      name: 'Calculo',
      capacity: '20',
      hours: 350
    }];

    

    setTimeout(() => {
      resolve(courses)
    }, 5000);
       
  });

  this.loading = true;
  getStudentsPromise.
  then((result) => "")
  .finally( () =>{""})

  getCoursesPromise.
  then((result) => "")
  .finally( () =>{this.loading = false;})
}




}
