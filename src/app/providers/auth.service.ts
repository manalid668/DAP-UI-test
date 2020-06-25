import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Users;

  constructor(private http: HttpClient) {
    this.currentUser = new Users();
   }

   login(userId: string, userPassword: string): Observable<any> {
    const loginObj = {
      username: userId,
      password: userPassword
    };
    const url = 'http://localhost:3006/login';
    return this.http.post(url, loginObj);
  }

  // login(userId: string, userPassword: string): boolean {
  //   if (userId === 'admin') {
  //     /********API CALL*******/
  //     this.currentUser.userId = 'admin';
  //     this.currentUser.userName = 'manali dey';
  //     this.currentUser.companyName = 'PwC';
  //     this.currentUser.password = userPassword;
  //     this.currentUser.isAdmin = true;
  //     window.localStorage.setItem('UserId', this.currentUser.userId);
  //     window.localStorage.setItem('UserName', this.currentUser.userName);
  //     window.localStorage.setItem('isAdmin', JSON.stringify(this.currentUser.isAdmin));
  //     window.localStorage.setItem('UserLoggedIn', JSON.stringify(this.currentUser));
  //     return true;
  //   }
  //   return false;
  // }
}
