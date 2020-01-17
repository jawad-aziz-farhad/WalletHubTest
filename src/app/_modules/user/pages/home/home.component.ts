import { Component, OnInit } from '@angular/core';
import { IPost } from '../../_interfaces/post.interface';
import { Router } from '@angular/router';
import { DataParserService } from 'src/app/_services/data-parser/data-parser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts : Array<IPost> = [];
  amount: string;

  constructor(private dataParser: DataParserService,
              private router: Router) { }

  ngOnInit() {
    this.posts = [];
    for(let i=9; i>=0; i--){
      let post : IPost = { 
        user : { avatar : 'default-avatar.png' , 
                userName : i%2 == 0 ? 'Scott'  : 'Cody', 
                firstName: i%2 == 0 ? 'Scott ' : 'Cody', 
                lastName : i%2 == 0 ? 'Rowell' : 'House' },
        text : 'Post # ' + (i+1), 
        images : [i%2 == 0 ? '1.jpg' : '4.jpg' ] ,
        video : '' , 
        likeCount  : (i%2 == 0) ? 3  : 2 , 
        replyCount : (i%2 == 0) ? 1 : 2,
        createdAt : new Date()
      };
      this.posts.push(post)
    }
  }

  addNewPost(post : IPost){
    console.log('Post', post);
    this.posts = [ post , ...this.posts];
  }

  goToDetails(post : IPost){
    this.dataParser.post = post;
    this.router.navigateByUrl('/user/post-details');
  }
}
