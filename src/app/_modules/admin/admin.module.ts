import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { TableComponent } from './pages/table/table.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { IconsComponent } from './pages/icons/icons.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FixedpluginComponent } from './components/fixedplugin/fixedplugin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    SidebarComponent,
    NavbarComponent,
    FixedpluginComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class AdminModule { }
