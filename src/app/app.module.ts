import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/home/components/posts/posts.component';
import { PostsLayoutComponent } from './components/home/components/posts-layout/posts-layout.component';
import { PostComponent } from './components/home/components/posts/components/post/post.component';
import { PostCommentComponent } from './components/home/components/posts/components/post-comment/post-comment.component';
import { ArticlesComponent } from './components/home/components/components/articles/articles.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import { SpaceGameComponent } from './components/projects/space-game/space-game.component';
import { TearableClothComponent } from './components/projects/tearable-cloth/tearable-cloth.component';
import { ToDoComponent } from './components/projects/to-do/to-do.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArtistComponent } from './components/artist/artist.component';
import { SelfComponent } from './components/self/self.component';
import { GuideComponent } from './components/guide/guide.component';
import { ProgrammerComponent } from './components/programmer/programmer.component';
import { CvComponent } from './components/cv/cv.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    AdminComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    HeaderComponent,
    PostsComponent,
    PostsLayoutComponent,
    PostComponent,
    PostCommentComponent,
    ArticlesComponent,
    BlogComponent,
    SpaceGameComponent,
    TearableClothComponent,
    ToDoComponent,
    ArtistComponent,
    SelfComponent,
    GuideComponent,
    ProgrammerComponent,
    CvComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
