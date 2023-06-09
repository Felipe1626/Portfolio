import { Component, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {  
  panels: ElementRef[] = [];
  logo_form_ease: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/logo%20form%20ease.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL2xvZ28gZm9ybSBlYXNlLnBuZyIsImlhdCI6MTY4NjE5MjQxOCwiZXhwIjoxNzE3NzI4NDE4fQ.uF6EenBdbmiR4lxbDpEP2JZo1VHDqeRJ7Q9kXLW6z4E&t=2023-06-08T02%3A46%3A58.741Z';
  around_the_world: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/video/Around%20the%20World.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdmlkZW8vQXJvdW5kIHRoZSBXb3JsZC5tcDQiLCJpYXQiOjE2ODU0OTQ3NTksImV4cCI6MTcxNzAzMDc1OX0.NQ6WTkqxd5DBjSmk3An4at6qbUIh-qpTVfx22hsbfh8&t=2023-05-31T00%3A59%3A25.906Z';
  cositas_kukas: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/Logo%20cositas%20kukas.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL0xvZ28gY29zaXRhcyBrdWthcy5wbmciLCJpYXQiOjE2ODYxODY0NTUsImV4cCI6MTcxNzcyMjQ1NX0.oMAWKNB6Dm3pHwFgPtgfQ8GHkOQEVqHUYtqUv4ud3Kg&t=2023-06-08T01%3A07%3A37.490Z';
  video_url: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/video/frprovesize.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdmlkZW8vZnJwcm92ZXNpemUubXA0IiwiaWF0IjoxNjgxNjg5MzQ5LCJleHAiOjE3MTMyMjUzNDl9.0z-BreeDZxXEWwRSLF1h8ZsSX20NxjOrB13FkpkXKhY&t=2023-04-16T23%3A55%3A48.761Z';
  video_one_url: string ='https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/video/laptop.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdmlkZW8vbGFwdG9wLm1wNCIsImlhdCI6MTY4MjA0MjU0NCwiZXhwIjoxNzEzNTc4NTQ0fQ.hTKCHaN1zuGv8qtskuFBOQcaQ4nU2n15a40G5MpP8DQ&t=2023-04-21T02%3A02%3A23.337Z';
  img_one_url: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/Black%20Neon%20Modern%20Cyber%20Personal%20Profile%20Facebook%20Post.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL0JsYWNrIE5lb24gTW9kZXJuIEN5YmVyIFBlcnNvbmFsIFByb2ZpbGUgRmFjZWJvb2sgUG9zdC5wbmciLCJpYXQiOjE2ODE2ODk0MDQsImV4cCI6MTcxMzIyNTQwNH0._ZdWNOxX97ajYrLtAvMt7KjHqebyAVf14EQHt4xjKA8&t=2023-04-16T23%3A56%3A43.974Z';
  img_two_url: string = 'https://zvziniaidkuuulxbldkr.supabase.co/storage/v1/object/sign/assets/img/full%20stack%20developer%20python.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvaW1nL2Z1bGwgc3RhY2sgZGV2ZWxvcGVyIHB5dGhvbi5wbmciLCJpYXQiOjE2ODE2OTI4NzQsImV4cCI6MTcxMzIyODg3NH0.7cozxXkt17NPC8ppSTC1nHuDUBKqE5HpAFI9LI45xAY&t=2023-04-17T00%3A54%3A33.478Z';
  img_three_url: string = 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  img_four_url: string = 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  img_five_url: string = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80';
  img_six_url: string = 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80';
  img_seven_url: string = 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  
  ngOnInit() {
    this.panels = this.element.nativeElement.querySelectorAll('.panel');
    this.changePanel(this.panels[0]);
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
