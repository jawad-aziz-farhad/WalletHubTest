import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const adminRoutes : Routes = [
  { path : 'home' , component : HomeComponent } ,
  { path : '' , redirectTo: 'home' , pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports : [RouterModule]
})

export class AdminRoutingModule {}