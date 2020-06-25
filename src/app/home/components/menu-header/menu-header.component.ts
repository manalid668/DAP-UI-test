import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  public currentUser: Users;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initialPageLoad();
  }
  initialPageLoad() {
    this.currentUser = JSON.parse(localStorage.getItem('UserLoggedIn'));
    console.log('Name ', this.currentUser.userName);
  }
  logOut() {
    localStorage.clear();
    this.route.navigate(['../login']);
  }

}
