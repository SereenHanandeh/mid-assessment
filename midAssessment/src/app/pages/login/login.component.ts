import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  @Output() loginEvent = new EventEmitter<{
    email: string;
    password: string;
  }>();

  submitLogin() {
    this.loginEvent.emit({ email: this.email, password: this.password });
  }
}
