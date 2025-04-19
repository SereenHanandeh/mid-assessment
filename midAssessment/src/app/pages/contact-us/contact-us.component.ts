import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  sendMessage() {
    if (!this.name || !this.email || !this.subject || !this.message) {
      alert('Please fill all required fields');
    } else {
      alert('Your message has been sent, Thank you!');
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
}
