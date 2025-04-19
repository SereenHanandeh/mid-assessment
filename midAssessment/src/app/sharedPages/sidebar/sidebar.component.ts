import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { ProfileComponent } from "../../pages/profile/profile.component";
import { ContactUsComponent } from "../../pages/contact-us/contact-us.component";
import { AboutUsComponent } from "../../pages/about-us/about-us.component";
import { AddUserComponent } from "../../pages/add-user/add-user.component";
import { GetUniversitiesComponent } from "../../pages/get-universities/get-universities.component";


@Component({
  selector: 'app-sidebar',
  imports: [LogoComponent, ProfileComponent, ContactUsComponent, AboutUsComponent, AddUserComponent, GetUniversitiesComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  currentPage: string = '';

  showComponent(page: string) {
    this.currentPage = page;
  }
}

