import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const userRoutes : Routes = [
    { path : '' , component : UserComponent, children : [
      { path : 'home' , component : HomeComponent } ,
      { path : 'post-details' , component : PostDetailComponent } ,
      { path : '', redirectTo : 'home' , pathMatch : 'full' },
      { path: '**', component:  NotFoundComponent } ]
    } 
  ]
  @NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports : [RouterModule]
  })
  

export class UserRoutingModule {}