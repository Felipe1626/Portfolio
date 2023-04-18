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
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
