import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  isMenuOpen: boolean;

  constructor() {
    if (window.innerWidth < 992) {
      this.isMenuOpen = false;
    } else {
      this.isMenuOpen = true;
    }
  }

  toggleMenu(): void {
    if (window.innerWidth < 992) {
      this.isMenuOpen = !this.isMenuOpen;
      console.log('Menu is open:', this.isMenuOpen);
    } else {
      this.isMenuOpen = true;
    }
  }
}
