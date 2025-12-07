import { Component } from '@angular/core';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

faGithub
/*import { MailerService } from 'src/app/services/mailer.service';*/
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {  
  faCoffee = faCoffee
  faWhatsapp = faWhatsapp
  faLinkedin = faLinkedin
  faGithub = faGithub
  whatsapp_logo = faWhatsapp
  faInstagram = faInstagram
  // whatsapp_logo: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/whatsapp__logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL3doYXRzYXBwX19sb2dvLnBuZyIsImlhdCI6MTY4NjQ1NjQyOCwiZXhwIjoxNzE3OTkyNDI4fQ.iIeHlDIIREuUjz-Zr9d2ZrNg0-BWhlBkLHhx0ZNx9LM&t=2023-06-11T04%3A07%3A08.104Z';
  linkedIn_logo: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/linked-in.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL2xpbmtlZC1pbi5wbmciLCJpYXQiOjE2ODY0NTcwMDksImV4cCI6MTcxNzk5MzAwOX0.uNp74fLH4GDsEf5a2pvlU4fz6vTh3fWVn4pcDvx7B2A&t=2023-06-11T04%3A16%3A49.056Z';
  github_logo: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/github.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL2dpdGh1Yi5wbmciLCJpYXQiOjE2ODY0NTg2NDYsImV4cCI6MTcxNzk5NDY0Nn0.aIcIfZ1dnE70WPqT005gVKrmFd5tz_jHMnanq2_h0is&t=2023-06-11T04%3A44%3A05.441Z'; 
  mailOptions = {
    name: '',
    message: '',
    email: ''
  }
  constructor (/*private mailer: MailerService*/) {  }
  onSubmit() {
    /*this.mailer.sendMail(this.mailOptions)*/
  }
}
