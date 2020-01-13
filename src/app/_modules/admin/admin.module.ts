import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsModule } from '../shared/shared.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { ToastrModule } from 'ngx-toastr';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [AdminLayoutComponent ,HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    //NEW ONES
    SidebarModule,
    NavbarModule,
    ToastrModule,
    FooterModule,
    FixedPluginModule

  ]
})
export class AdminModule { }
