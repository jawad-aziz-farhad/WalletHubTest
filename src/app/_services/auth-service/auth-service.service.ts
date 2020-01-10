import { Injectable } from '@angular/core';
import { USER_INFO } from 'src/app/_constants/constants';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject : BehaviorSubject<any>;

  constructor(private http: HttpClient) { 
    this.userSubject = new BehaviorSubject<any>({});
  }

  login(payload: any){
    const url = environment.APIEndPoint + 'login';
    return this.http.post(`${url}` , payload).pipe(map((response : any) => {
      if(response && response.success) {
        const user = response.data;
        this.userSubject.next(user);
        return user;
      }
      else  
        return response || '';
    }));
  }

  get userVal() : any { return this.userSubject.value; }
  set user(user) { localStorage.setItem(USER_INFO , JSON.stringify(user)); }
  get user() : any{ return localStorage.getItem(USER_INFO); }
  
  
  isAuthenticated(): boolean { return localStorage.getItem(USER_INFO) ? true : false; }
  
  logOut() { 
    localStorage.removeItem(USER_INFO);
    this.userSubject.next(null);    
  }
} 
