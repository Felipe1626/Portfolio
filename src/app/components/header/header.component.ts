import { Component } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faHamburger = faHamburger
 profile_picture: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/profile-picture.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL3Byb2ZpbGUtcGljdHVyZS5wbmciLCJpYXQiOjE2ODE2ODg5NzksImV4cCI6MTcxMzIyNDk3OX0.J9lcvPkuUyXAw50Kz3uTOoq_RtGwOKstmyMDFAdaSLA&t=2023-04-16T23%3A49%3A38.718Z';
  
}
