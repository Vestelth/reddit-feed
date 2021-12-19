import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedPost } from '../feed.model';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() postData: FeedPost;

  constructor(
    private router: Router,
    private feedService: FeedService,
    private route: ActivatedRoute
  ) {}

  goToPostDetails(event: Event) {
    event.preventDefault();

    this.feedService.setText(this.postData.selfText);
    this.router.navigate(['post', this.postData.id]);
  }
}
