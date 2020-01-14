import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const adminRoutes : Routes = [
  { path : '' , component : AdminComponent, children : [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path : '' ,   redirectTo : 'dashboard' , pathMatch : 'full'}
   ]},
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