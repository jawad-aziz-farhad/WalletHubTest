import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted : boolean;
  response: any; 
  SERVER_URL : string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    //this.SERVER_URL = environment.APIEndPoint;
    this.submitted = false;    

    this.loginForm = this.formBuilder.group({
      userName : ['', Validators.required] ,
      password : ['' , Validators.required]
    });
    this.loginForm.valueChanges.subscribe(result => {this.response = undefined; });
    //this.authService.logOut();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if(this.loginForm.invalid) {
      return;
    }
    //console.log(this.loginForm.value);
    
    this.authService.login(this.loginForm.value).subscribe(
    response => this.handleResponse(response),
    error    => this.handleError(error));
  }


  handleResponse(response : any){
    console.log(response);
    this.submitted = false;
    this.response = response;
    if(response && response.user) {
      const role = response.user.role;
      const routerLink = role == 'admin' ? 'admin' : ( role == 'member' ? 'member' : 'user') ;
      this.router.navigate(['/'+ routerLink]);
    }
  }

  handleError(error : any){    
    this.submitted = false;
    console.error('Login Error', error);
  }
}
