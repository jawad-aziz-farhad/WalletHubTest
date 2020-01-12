import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const userRoutes : Routes = [
   { path : '' , component : UserComponent, children : [
      { path : 'home' , component : HomeComponent},
      { path : '', redirectTo : 'home' , pathMatch : 'full' },
      { path: '**', component:  NotFoundComponent } ]
    } 
  ]
  @NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports : [RouterModule]
  })
  

export class UserRoutingModule {}