import { Component } from '@angular/core';
/*import { MailerService } from 'src/app/services/mailer.service';*/
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {  
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
