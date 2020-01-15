import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '../shared/animations';

@Component({
  selector: 'user-module-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations : [routerTransition]
})
export class UserComponent {

  constructor(){}
}
