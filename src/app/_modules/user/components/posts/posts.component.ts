import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../_interfaces/post.interface';
import { DataParserService } from 'src/app/_services/data-parser/data-parser.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnChanges {

  @Input('posts') posts : Array<IPost>;
  @Output() onPostClick$: any = new EventEmitter<IPost>();
  
  constructor(private dataParser: DataParserService) { }

  /* On Creating New Post, posts array will be modified and This Hook get Called*/
  ngOnChanges(changes : SimpleChanges){
    console.log('New Changes' , changes )
  }

  onPostClick(post){
    this.dataParser.storage = post;
  }

}
