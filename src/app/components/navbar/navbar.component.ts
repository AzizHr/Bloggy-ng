import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loggedInUser = null;
  constructor(private router: Router) {
    this.loggedInUser = this.getUser();
  }

  getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }

}
