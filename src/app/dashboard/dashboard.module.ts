import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CoursesDialogComponent } from "../courses/courses-dialog/courses-dialog.component";
import { CoursesTableComponent } from "../courses/courses-table/courses-table.component";
import { CoursesComponent } from "../courses/courses/courses.component";
import { HomeComponent } from "../home/home/home.component";
import { FullNamePipe } from "../shared/pipes/full-name.pipe";
import { SharedModule } from "../shared/shared.module";
import { UserComponent } from "../students/user-component/user-component";
import { UserDialogComponent } from "../students/user-dialog/user-dialog.component";
import { UserTAbleComponent } from "../students/user-table/user-table.component";
import { ThFontsDirective } from "../th-fonts.directive";
import { DashboardRoutingModule } from "./dashboard-routing.modulte";
import { DashboardComponent } from "./dashboard.component";



@NgModule({
  declarations: [
    DashboardComponent, 
    FullNamePipe,   
    ThFontsDirective,
    HomeComponent,
    UserComponent,
    UserTAbleComponent,
    UserDialogComponent,
    CoursesTableComponent,
    CoursesDialogComponent,
    CoursesComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
    
  ],
  exports: 
  [DashboardComponent,
  FullNamePipe,
  UserTAbleComponent,
  UserDialogComponent,
  UserComponent,
  ThFontsDirective,
  HomeComponent,
  DashboardRoutingModule,
  CoursesComponent,
  CoursesTableComponent,
  CoursesDialogComponent]
})
export class DashboardModule { }
