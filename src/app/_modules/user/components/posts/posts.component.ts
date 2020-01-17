import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../_interfaces/post.interface';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnChanges {

  @Input('posts') posts : Array<IPost>;
  @Output() onPostClick: any = new EventEmitter<IPost>();
  
  constructor() { }

  /* On Creating New Post, posts array will be modified and This Hook get Called*/
  ngOnChanges(changes : SimpleChanges){
    console.log('New Changes' , changes )
  }

  _onPostClick(post : IPost){
    this.onPostClick.emit(post);
  }

}
