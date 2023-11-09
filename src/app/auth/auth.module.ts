import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.modulte';



@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    LoginModule
  ],
  exports:[
    LoginModule,
    AuthComponent
  ]
})
export class AuthModule { }
