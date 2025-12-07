import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { ProgrammerComponent } from './components/programmer/programmer.component';
import { SelfComponent } from './components/self/self.component';
import { GuideComponent } from './components/guide/guide.component';
import { ArtistComponent } from './components/artist/artist.component';
import { CvComponent } from './components/cv/cv.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'self', component: SelfComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'programmer', component: ProgrammerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'cv', component: CvComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
