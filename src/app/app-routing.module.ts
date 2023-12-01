import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
const routes: Routes = [ 
  {path: '', component: LandingPageComponentComponent},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
