import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CoursesComponent } from "../courses/courses/courses.component";
import { UserComponent } from "../students/user-component/user-component";

@NgModule({
    imports:[
        RouterModule.forChild([
            
                
                {
                  path: 'students',
                  component: UserComponent,
                },
                {
                  path: 'courses',
                  component: CoursesComponent,
                },
                {
                  path: 'enroll',
                  component: CoursesComponent,
                },
                {
                  path: '**',
                  redirectTo: 'home',
                }
              
        ])
    ], 
    exports:[RouterModule] 
})
export class DashboardRoutingModule{}