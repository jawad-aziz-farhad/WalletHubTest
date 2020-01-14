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

    for(let i=0; i<10; i++){
    }

  }

}
