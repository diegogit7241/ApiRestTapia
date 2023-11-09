import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Alumno } from '../Models';
import { LoginPayload } from '../Models/loginPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authAlumnos$ = new BehaviorSubject<Alumno | null> (null)

  public authAlumnos =  this._authAlumnos$.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(payload : LoginPayload): Observable<Alumno>{
    this.httpClient
    .get('http://localhost:3000/Alumnos?email='+${payload.email}+'&password'+${payload.passowrd})
    .subscribe({
      next:(response ) => console.log(response)
    });

    const alumno: Alumno = {
      id:5,
      email:'',
      lastName:'',
      name:'',
      country:'',
      password:'',
      phone:'',
      token:''
    };
    this._authAlumnos$.next(alumno)
  return of<Alumno>(alumno);
  } 
  
}
