import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AuthService } from '../_services';
import { EMAIL_PATTERN, ERROR_MSG } from '../_constants/constants';
import { CustomValidator } from '../_helpers/custom-validator';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  
})
export class SignUpComponent implements OnInit {

  signUpForm : FormGroup;
  
  submitted  : boolean;
  isRegistered : boolean;
  formData: FormData;
  isImageSelected: boolean;
  response: any;
  
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    
    this.submitted = this.isRegistered = this.isImageSelected = false;

    this.signUpForm = this.formBuilder.group({
      firstName : ['', Validators.required] ,
      lastName : ['', Validators.required] ,
      userName : ['', Validators.required] ,
      email : ['', Validators.compose([ Validators.required , Validators.pattern(EMAIL_PATTERN)] ) ] ,
      password : ['' , Validators.compose([ 
                  Validators.required,
                  CustomValidator.patternValidator(/\d/, { hasNumber: true }) ,
                  CustomValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                  CustomValidator.patternValidator(/[a-z]/, { hasLowerCase: true }),
                  Validators.minLength(5)
                ]) ],
    confirmPassword: ['', [ Validators.required ] ] ,
    role : ['user'],
    isAgreeToTerms : ['', [Validators.requiredTrue]]
    } , { validators : CustomValidator.passwordValidator});

    this.signUpForm.valueChanges.subscribe(result => {this.response = undefined; });
    
  }

  get f() { return this.signUpForm.controls; }
  
  /* SUBMITTING FORM FOR REGISTRATION */
  onSubmit() {
    if(this.signUpForm.invalid) 
      return;
    
    this.submitted = true;  
    let register = this.authService.register(this.signUpForm.value);
    register.subscribe(response => {
      this.router.navigateByUrl('');
    },
    error => {
      console.error("Registration Error", error);
    });      
  }  

  isErrorField(field: string) {
    return this.response && !this.response.success && this.response.message.indexOf(field) > -1;
  }
}
