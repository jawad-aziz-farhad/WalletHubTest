import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import {CurrencyPipe } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgContentComponent } from './components/ng-content/ng-content.component';

@NgModule({
  declarations: [ UserComponent, PostsComponent, CreatePostComponent, HomeComponent, PostDetailComponent , NgContentComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports : [ NgContentComponent ],
  
  providers : [ CurrencyPipe ]
})
export class UserModule { }
