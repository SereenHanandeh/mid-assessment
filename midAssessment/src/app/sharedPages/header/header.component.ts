import { Component } from '@angular/core';
import { LoginComponent } from '../../pages/login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = false;
  isLoggedIn = false;
  userName: string = '';
  showLoginForm = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  onLoginData(data: { email: string; password: string }) {
    console.log('Received login data:', data);
    if (data.email && data.password) {
      this.isLoggedIn = true;
      this.userName = data.email.split('@')[0];
      this.showLoginForm = false;
    } else {
      alert('Please fill the fields');
    }
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}
