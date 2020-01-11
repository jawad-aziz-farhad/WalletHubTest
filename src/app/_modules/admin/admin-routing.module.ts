import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const adminRoutes : Routes = [
    { path : '' , pathMatch: 'full' , component : HomeComponent } ,
    { path : 'home' , component : HomeComponent } ,
]
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports : [RouterModule]
})

export class AdminRoutingModule {}