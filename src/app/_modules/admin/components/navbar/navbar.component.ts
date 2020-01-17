import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../../../_services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../shared/modal/modal.component';

const newLocal = 'yes';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(private readonly authService: AuthService,
              private modalService: NgbModal,
              private router: Router){}
  confirm() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.data = { title : 'Logout Confirmation' , content : 'Are you sure that you want to logout ?' , type : 'confirmation'};
    modalRef.result.then((result) => {
    if (result == newLocal) { this.logOut(); }
    });
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
}
