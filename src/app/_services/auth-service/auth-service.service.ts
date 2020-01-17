import { Injectable } from '@angular/core';
import { USER_INFO } from 'src/app/_constants/constants';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject : BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    this.userSubject = new BehaviorSubject<any>(JSON.parse(this.user));
  }

  login(payload: any){
    // const url = environment.APIEndPoint + 'login';
    // return this.http.post(`${url}` , payload);
    this.userSubject.next(payload);
    this.user = payload;
    return interval(3000);
  }

  register(payload: any){
    //const url = environment.APIEndPoint + 'register';
    //return this.http.post(`${url}` , payload));
    payload.role = 'user';
    this.userSubject.next(payload);
    this.user = payload;
    return interval(3000);
  }
  
  get userVal() : BehaviorSubject<any> { return this.userSubject; }
  set user(user) { localStorage.setItem(USER_INFO , JSON.stringify(user)); }
  get user() : any{ return localStorage.getItem(USER_INFO); }
  
  
  isAuthenticated(): boolean { return localStorage.getItem(USER_INFO) ? true : false; }
  
  logOut() { 
    localStorage.removeItem(USER_INFO);
    this.userSubject.next(null);    
  }
} 
