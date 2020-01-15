import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoadStyleService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');
    style.id  = 'module-style';
    style.rel = 'stylesheet';
    style.href = `${styleName}`;

    head.appendChild(style);
    
  }

}
