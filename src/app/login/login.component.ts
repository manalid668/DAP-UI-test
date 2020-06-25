import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../models/users';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loggedInUser: Users;
  public loggedInUserList: any[];
  public hasError = false;
  public title = 'Digital Assessment Platform';
  constructor(private authService: AuthService,
              private route: Router,
              private toastrservice: ToastrService) {
                this.loggedInUser = new Users();
  }
  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
      this.hasError = false;
      const userId = loginForm.form.value.username;
      const password = loginForm.form.value.password;
      console.log('Login Form is valid ', loginForm.valid);
      if (loginForm.valid) {
        this.authService.login(userId, password)
                        .subscribe(
                          data => {
                                if (data.status === 'success' && data.message && data.message[0].flag === 1) {
                                    const loginTest = data.message[0];
                                    this.loggedInUserList = data.message;
                                    console.log('Login details ', this.loggedInUserList);
                                    console.log('length of Login details ', this.loggedInUserList.length);
                                    console.log('length of Login details ', this.loggedInUserList[0].UserName);
                                    this.loggedInUser.userName = this.loggedInUserList[0].UserName;
                                    this.loggedInUser.companyName = this.loggedInUserList[0].company;
                                    if (this.loggedInUserList[0].Role === 'ADMIN') {
                                      this.loggedInUser.isAdmin = true;
                                    } else {
                                      this.loggedInUser.isAdmin = false;
                                    }
                                    this.loggedInUser.contactNumber = this.loggedInUserList[0].ContactNumber;
                                    this.loggedInUser.email = this.loggedInUserList[0].Email;
                                    this.loggedInUser.firstName = this.loggedInUserList[0].FirstName;
                                    this.loggedInUser.lastName = this.loggedInUserList[0].LastName;
                                    this.loggedInUser.userId = this.loggedInUserList[0].guid;
                                    this.loggedInUser.fullName = this.loggedInUser.firstName + ' ' + this.loggedInUser.lastName;
                                    window.localStorage.setItem('UserLoggedIn', JSON.stringify(this.loggedInUser));
                                    if (this.loggedInUser) {
                                      this.route.navigate(['\home']);
                                    } else {
                                      this.hasError = true;
                                      this.toastrservice.error('Wrong credential', this.title);
                                    }
                                } else if (data.status === 'success' && data.message && data.message[0].flag === 0) {
                                  this.hasError = true;
                                  this.toastrservice.error('Wrong credential', this.title);
                                }
                          }
                        );
        // if (isLoggedIn) {
        //   this.route.navigate(['\home']);
        // } else {
        //   this.hasError = true;
        //   this.toastrservice.error('Wrong credential', this.title);
        // }
   }
      // if (loginForm.valid) {
      //      const isLoggedIn = this.authService.login(userId, password);
      //      if (isLoggedIn) {
      //        this.route.navigate(['\home']);
      //      } else {
      //        this.hasError = true;
      //        this.toastrservice.error('Wrong credential', this.title);
      //      }
      // }
  }

}
