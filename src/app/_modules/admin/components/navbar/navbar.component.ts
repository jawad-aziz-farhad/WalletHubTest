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

  private listTitles: any[];
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;
  public isCollapsed = true;
  @ViewChild("admin-navbar", {static: false}) button;

  constructor(private element : ElementRef, private router: Router,
              private authService: AuthService,
              private modalService: NgbModal) {
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
  }

  ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      var navbar : HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
     });
  }
  sidebarToggle() {
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
          setTimeout(function(){
            mainPanel.style.position = '';
          }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    collapse(){
      this.isCollapsed = !this.isCollapsed;
      const navbar = document.getElementsByTagName('nav')[0];
      if (!this.isCollapsed) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      }else{
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-white');
      }

    }

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
