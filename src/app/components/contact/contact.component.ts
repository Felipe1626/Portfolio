import { Component } from '@angular/core';
import * as nodemailer from 'nodemailer';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  onSubmit() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'felipe.k.r.r16@gmail.com',
        pass: ''
      }
    });

    const mailOptions = {
      from: this.email,
      to: 'recipient-email@example.com',
      subject: 'New message from your website',
      text: `Name: ${this.name}\nEmail: ${this.email}\n\nMessage: ${this.message}`
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

  }
  
}