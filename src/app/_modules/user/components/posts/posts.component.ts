import { Component, OnInit, Input } from '@angular/core';

export interface IPost {
  user : { avatar : string , userName : string , firstName : string , lastName : string },
  text : string, 
  images : string[] ,
  video : string , 
  likeCount : number , 
  replyCount : number

}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts: Array<IPost> = [];

  @Input('newCreatedPost') set newCreatedPost(post: any){
    this.posts.splice(0 ,0 , post);
  };
  
  constructor() { }

  ngOnInit() {
    this.posts = [];
    for(let i=0; i<10; i++){
      let post : IPost = { 
        user : { avatar : 'default-avatar.png' , userName : 'User#'+ `${i+1}` , firstName : 'User'  , lastName : `${i+1}` },
        text : 'Post # ' + i+1, 
        images : [i%2 == 0 ? '1.jpg' : '4.jpg' ] ,
        video : '' , 
        likeCount  : i%2 == 0 ? 3  : 2 , 
        replyCount : i%2 == 0 ? 1 : 2
      };
      this.posts.push(post)
    }

    console.log('Posts' , this.posts);
  }

}
