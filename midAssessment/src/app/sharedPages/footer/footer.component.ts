import { Component } from '@angular/core';
import { AddUserComponent } from "../../pages/add-user/add-user.component";

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
userName: string="Sereen Hanandeh";
}
