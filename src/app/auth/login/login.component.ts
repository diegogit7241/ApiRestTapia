import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = new FormControl(null,[Validators.required]);
  password= new FormControl(null,[Validators.required]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  });

  constructor(private router: Router, private  authservice: AuthService){}

  login(): void {

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched
    } else {
      this.loginForm.valid
      this.authservice.login().subscribe({
        next: (authUser) =>{
          if(!!authUser){
            this.router.navigate(['/dashboard/students'])
          }
        }
      })

    }

  }

}
