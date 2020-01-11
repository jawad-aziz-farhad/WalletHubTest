import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const userRoutes : Routes = [
    { path : '' , pathMatch: 'full' , component : HomeComponent } ,
    { path : 'home' , component : HomeComponent } ,
  ]
  @NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports : [RouterModule]
  })
  

export class UserRoutingModule {}