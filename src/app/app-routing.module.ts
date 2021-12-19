import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './modules/feed/feed.component';
import { PostContentComponent } from './modules/feed/post-content/post-content.component';

const appRoutes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'post/:id', component: PostContentComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
