import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services';
import { environment } from 'src/environments/environment';
import { EMAIL_PATTERN, USER_INFO } from '../_constants/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted : boolean;
  response: any;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem(USER_INFO));
    if(user)
    this.router.navigate(['/'+ user.role]);
    this.submitted = false;    
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.compose([ Validators.required , Validators.pattern(EMAIL_PATTERN) ]) ] ,
      password : ['' , Validators.compose([ Validators.required , Validators.minLength(5) ]) ],
      isAdmin  : [ false, [ Validators.required ]],
      role : ['user']
    });
    this.loginForm.get('isAdmin').valueChanges.subscribe((result : any) => {
      if(result)
        this.loginForm.get('role').patchValue('admin');
      else
        this.loginForm.get('role').patchValue('user');
      
    });
    this.loginForm.valueChanges.subscribe(result => {this.response = undefined; });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if(this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe(
        response => this.handleResponse(this.loginForm.value),
        error    => this.handleError(error));
  }


  handleResponse(response : any) {
    this.submitted = false;
    this.response = response;
    const role = response.role;
    const routerLink = role == 'admin' ? 'admin' : 'user';
    this.router.navigate(['/'+ routerLink]);
  }

  handleError(error : any){    
    this.submitted = false;
    console.error('Login Error', error);
  }
}
