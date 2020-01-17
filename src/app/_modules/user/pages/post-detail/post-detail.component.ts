import { Component, OnInit } from '@angular/core';
import { DataParserService } from 'src/app/_services/data-parser/data-parser.service';
import { IPost } from '../../_interfaces/post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  
  private post: IPost;
  
  constructor(private dataParserService: DataParserService) { }

  ngOnInit() {
    this.post = this.dataParserService.post;
  }

}
