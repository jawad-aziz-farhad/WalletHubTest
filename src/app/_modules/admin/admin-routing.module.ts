import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

// const adminRoutes : Routes = [
//   { path : 'home' , component : HomeComponent } ,
//   { path : '' , redirectTo: 'home' , pathMatch: 'full' }
// ]
// @NgModule({
//   imports: [RouterModule.forChild(adminRoutes)],
//   exports : [RouterModule]
// })

// export class AdminRoutingModule {}

export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports : [RouterModule]
})

export class AdminRoutingModule {}