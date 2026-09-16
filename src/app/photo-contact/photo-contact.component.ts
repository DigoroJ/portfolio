import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './photo-contact.component.html',
  styleUrl: './photo-contact.component.css',
})
export class PhotoContactComponent {

  sending = false;

  formData = {
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  sendEnquiry() {

    this.sending = true;

    const data = {
      access_key: '0e0704a5-e2c6-4e0b-bef5-7d22bd91f03f',

      subject: `New Master H Enquiry - ${this.formData.service}`,

      name: this.formData.name,

      email: this.formData.email,

      service: this.formData.service,

      event_date: this.formData.date,

      message: this.formData.message
    };

    this.http
      .post(
        'https://api.web3forms.com/submit',
        data
      )
      .subscribe({

        next: (response: any) => {

          console.log(response);

          if (response.success) {

            alert('Thank you! Your enquiry has been sent.');

            this.formData = {
              name: '',
              email: '',
              service: '',
              date: '',
              message: ''
            };

          } else {

            alert('Something went wrong. Please try again.');

          }

          this.sending = false;
        },

        error: (error) => {

          console.error(error);

          alert('Unable to send enquiry. Please try again.');

          this.sending = false;
        }

      });
  }
}