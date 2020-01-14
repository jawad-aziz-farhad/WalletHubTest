import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  private readonly links : Array<any> = [
    { routerLink : '#' , title : 'About'},
    { routerLink : '#' , title : 'FAQs'},
    { routerLink : '#' , title : 'Contact'},
    { routerLink : '#' , title : 'Terms'},
    { routerLink : '#' , title : 'Privacy'}
  ]

  test : Date = new Date();
  constructor() {
  } 
}
