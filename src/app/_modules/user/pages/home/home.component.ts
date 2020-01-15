import { Component, OnInit } from '@angular/core';
import { IPost } from '../../_interfaces/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts : Array<IPost> = [];
  amount: string;

  constructor() { }

  ngOnInit() {
    this.posts = [];
    for(let i=9; i>=0; i--){
      let post : IPost = { 
        user : { avatar : 'default-avatar.png' , userName : 'User#'+ `${i+1}` , firstName : 'User'  , lastName : `${i+1}` },
        text : 'Post # ' + (i+1), 
        images : [i%2 == 0 ? '1.jpg' : '4.jpg' ] ,
        video : '' , 
        likeCount  : (i%2 == 0) ? 3  : 2 , 
        replyCount : (i%2 == 0) ? 1 : 2
      };
      this.posts.push(post)
    }
  }

  addNewPost(post : IPost){
    post.user.userName = 'User#' + this.posts.length + 1;
    post.user.firstName = 'User';
    post.user.lastName = `${(this.posts.length + 1)}`;
    this.posts = [ post , ...this.posts];
  }
  

  

}
