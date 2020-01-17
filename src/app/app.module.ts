import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminModule } from './_modules/admin/admin.module';
import { UserModule } from './_modules/user/user.module';
import { SharedModule } from './_modules/shared/shared.module';
import { LoadStyleService, AuthService } from './_services';
import { ToastrModule } from 'ngx-toastr';
import { DataParserService } from './_services/data-parser/data-parser.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AdminModule,
    UserModule,
    SharedModule
  ],
  exports: [ ],
  providers: [AuthService, LoadStyleService , DataParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
