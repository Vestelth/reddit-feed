import { Component, OnInit } from '@angular/core';
import { EntriesNumber, FeedPost, FetchFeedParams } from './feed.model';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feedPosts: FeedPost[] = [];
  isFetching = false;
  entriesNumber: EntriesNumber = 25;
  fetchParams: FetchFeedParams;
  error = null;

  constructor(private feedService: FeedService) {
    this.fetchParams = {
      limit: this.entriesNumber,
    };
  }

  ngOnInit() {
    this.getPosts();
  }

  getNumberOfPosts(postNumberLimit: EntriesNumber) {
    this.entriesNumber = postNumberLimit;
    this.fetchParams.limit = postNumberLimit;

    return this.getPosts();
  }

  getNextPosts() {
    this.fetchParams = {
      limit: this.entriesNumber,
      after: this.feedPosts[this.feedPosts.length - 1].id,
    };

    return this.getPosts();
  }

  getPreviousPosts() {
    this.fetchParams = {
      limit: this.entriesNumber,
      before: this.feedPosts[0].id,
    };

    return this.getPosts();
  }

  private getPosts() {
    this.isFetching = true;
    return this.feedService.fetchPosts(this.fetchParams).subscribe(posts => {
      this.isFetching = false;
      this.feedPosts = posts.slice(0, this.entriesNumber);
    });
  }
}
