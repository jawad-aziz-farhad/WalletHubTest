import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IPost } from '../../_interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit , OnChanges {

  @Input('posts') posts : Array<IPost>;
  
  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    console.log('Change inside Post com' )
  }

}
