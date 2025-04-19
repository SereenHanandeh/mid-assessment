import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sharedPages/header/header.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { SidebarComponent } from './sharedPages/sidebar/sidebar.component';
import { isPlatformBrowser } from '@angular/common';
import { GetUniversitiesComponent } from "./pages/get-universities/get-universities.component";
import { AddUserComponent } from "./pages/add-user/add-user.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userData = localStorage.getItem('user');
      this.isLoggedIn = !!userData;
    }
  }

  handleLoginSuccess() {
    this.isLoggedIn = true;
  }
}
