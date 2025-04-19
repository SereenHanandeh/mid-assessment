import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showLoginForm = false;

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}
