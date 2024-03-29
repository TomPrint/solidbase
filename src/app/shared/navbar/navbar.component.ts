import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarOpen: boolean = false;

  constructor() { }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
