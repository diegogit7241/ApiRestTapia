import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { dashboardGuard } from "./core/guards/dashboard.guard";


const routes: Routes = [
 { 
   path: 'dashboard',
   canActivate: [dashboardGuard],
  loadChildren: () =>
  import('./dashboard/dashboard.module').then((n) => n.DashboardModule)
  
},
{ 
  path: 'auth',
 loadChildren: () =>
 import('./auth/auth.module').then((n) => n.AuthModule)
 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
