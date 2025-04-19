import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  @Output() loginSuccess = new EventEmitter<void>();

  login() {
    if (!this.email || !this.password) {
      alert('Please fill all required fields');
    } else {
      alert(`Hello ${this.email}`);
      localStorage.setItem(
        'user',
        JSON.stringify({
          email: this.email,
          name: this.email.split('@')[0],
        })
      );
      this.loginSuccess.emit();
    }
  }
}
