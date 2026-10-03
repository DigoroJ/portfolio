import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  standalone: false
})
export class ContactsComponent {

  sending = false;
  minDate: string = '';

  formData = {
    cellphone: '',
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  };


  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {

  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');

  this.minDate = `${year}-${month}-${day}`;
}

  sendEnquiry(): void {

    this.sending = true;


    const data = {

      access_key: 'e2f39ebe-4f61-4911-9540-bd8195171eb3',

      subject:
        `New Portfolio Enquiry - ${this.formData.service}`,

      name: this.formData.name,

      cellphone: this.formData.cellphone,

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

            alert(
              'Thank you! Your enquiry has been sent successfully.'
            );


            this.formData = {

              name: '',
              email: '',
              cellphone: '',
              service: '',
              date: '',
              message: ''

            };

          } else {

            alert(
              'Something went wrong. Please try again.'
            );

          }


          this.sending = false;

        },


        error: (error) => {

          console.error(error);

          alert(
            'Unable to send enquiry. Please try again.'
          );

          this.sending = false;

        }

      });

  }

}