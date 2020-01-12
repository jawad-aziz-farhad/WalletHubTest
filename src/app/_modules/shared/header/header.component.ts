import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from '../../../_services';

const newLocal = 'yes';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('title') title : string;  

  constructor(private authService: AuthService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {}

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
