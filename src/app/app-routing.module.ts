import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RedirectGuardService, AuthGuardService } from './_guards';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './_modules/shared/not-found/not-found.component';

const routes: Routes = [
  { path : ''  , redirectTo : '', pathMatch: 'full' , canActivate : [ RedirectGuardService ] },
  { path : 'login', component : LoginComponent },
  { path : 'signup', component : SignUpComponent },
  { path : 'admin' , loadChildren : () => import('./_modules/admin/admin.module').then(mod => mod.AdminModule) , canActivate : [AuthGuardService] , data : { role : 'admin' , animation : 'User'}},
  { path : 'user' , loadChildren  : () => import('./_modules/user/user.module').then(mod => mod.UserModule) , canActivate : [AuthGuardService] , data : { role : 'user' , animation : 'User'}}  ,
  { path : 'not-found', component : NotFoundComponent },
  { path : '**', component : NotFoundComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
