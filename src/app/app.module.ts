import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FeedComponent } from './modules/feed/feed.component';
import { PostComponent } from './modules/feed/post/post.component';
import { PostContentComponent } from './modules/feed/post-content/post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    PostContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
