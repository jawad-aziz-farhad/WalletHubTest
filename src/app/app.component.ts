import { Component, OnInit } from '@angular/core';
import { AuthService, LoadStyleService } from './_services';
import { routerTransition } from './_modules/shared/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [routerTransition]
})
export class AppComponent implements OnInit {

  constructor(private readonly authService: AuthService,
              private readonly loadStyleService: LoadStyleService){
    
  }

  ngOnInit(){ this.lazyLoadStyles(); }

  lazyLoadStyles(){
    this.authService.userVal.subscribe(user => {
      if(user && user.role == 'admin')
        this.loadStyleService.loadStyle('admin-style.css');
      else
        this.loadStyleService.loadStyle('user-style.css')
    });
  }

}
