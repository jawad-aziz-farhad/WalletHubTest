import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RedirectGuardService } from './_guards';


const routes: Routes = [
  { path : ''  , redirectTo : '', pathMatch: 'full' , canActivate : [ RedirectGuardService ] },
  { path : 'login', component : LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
