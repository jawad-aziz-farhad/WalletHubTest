import { Injectable } from '@angular/core';
import { IPost } from 'src/app/_modules/user/_interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class DataParserService {

  public post$ : IPost ;

  constructor() { }

  set post(post : IPost) { this.post$ = post;}
  get post(): IPost { return this.post$; }
}
