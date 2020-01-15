import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ UserComponent, PostsComponent, CreatePostComponent, HomeComponent, PostDetailComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
