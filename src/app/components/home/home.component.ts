import { Component, ElementRef, Renderer2 } from '@angular/core';
import { faHandPointer } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faHandPointer = faHandPointer
  video_fr_full: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/video/fr%20emerald.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdmlkZW8vZnIgZW1lcmFsZC5tcDQiLCJpYXQiOjE2ODY3OTcyODIsImV4cCI6MTcxODMzMzI4Mn0.sk7hopONfUDdtMfNQbXoxvTfdTdAA-5OaVriZRtd-cA&t=2023-06-15T02%3A48%3A01.901Z';
  video_fr_square: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/video/fr%20500x500.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdmlkZW8vZnIgNTAweDUwMC5tcDQiLCJpYXQiOjE2ODMwNTc1MzEsImV4cCI6MTcxNDU5MzUzMX0.FCL6Q3ABbXjp0k-A01_C9FYLjkPigfpjVIazUEeHrXI&t=2023-05-02T19%3A58%3A51.686Z';
  video_url: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/video/frprovesize.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdmlkZW8vZnJwcm92ZXNpemUubXA0IiwiaWF0IjoxNjgxNjg5MzQ5LCJleHAiOjE3MTMyMjUzNDl9.0z-BreeDZxXEWwRSLF1h8ZsSX20NxjOrB13FkpkXKhY&t=2023-04-16T23%3A55%3A48.761Z';
  img_three_url: string = 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  img_four_url: string = 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  img_five_url: string = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80';
  img_six_url: string = 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
  img_seven_url: string = 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  panels: ElementRef[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit() {
    this.panels = this.el.nativeElement.querySelectorAll('.panel');
    this.changePanel(this.panels[2]);
  }

  changePanel(clickedPanel: any) {
    this.panels.forEach(panel => {
      if (panel === clickedPanel) {
        this.renderer.addClass(panel, 'active');
      } else {
        this.renderer.removeClass(panel, 'active');
      }
    });
  }
}
