import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { LoginComponent } from "../../pages/login/login.component";

@Component({
  selector: 'app-header',
  imports: [LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDarkMode = false;
  isLoggedIn = false;
  userName: string = '';

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      this.isLoggedIn = true;
      this.userName = userObj.name || '';
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleLogin() {
    // if(this.isLoggedIn){
    //   localStorage.removeItem('user')
    //   this.isLoggedIn=false;
    //   this.userName=this.userName;
    // }
    this.isLoggedIn = !this.isLoggedIn;
  }
}
