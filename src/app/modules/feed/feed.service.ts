import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiFeed, ApiFeedPostData, FeedPost, FetchFeedParams } from './feed.model';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  text: string;
  private readonly FEED_URL = 'https://www.reddit.com/r/sweden.json';
  private readonly defaultParams: FetchFeedParams = { limit: 25 };

  constructor(private http: HttpClient) {}

  fetchPosts(fetchParams = this.defaultParams) {
    return this.http.get<ApiFeed>(this.FEED_URL, {
      params: fetchParams as Record<string, any>
    }).pipe(
      map(response => {
        const feedPosts = response.data?.children || [];

        return feedPosts.map(post => this.adaptApiFeedPost(post.data));
      }),
      catchError(error => {
        throw new Error('Fetch data error: ' + error)
      })
    )
  }

  setText(text: string) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  private adaptApiFeedPost(apiPost: ApiFeedPostData): FeedPost {
    const {
      author = 'n/d',
      created = 'n/d',
      id = 'n/d',
      thumbnail = '',
      title = 'n/d',
      score = 'n/d',
      selftext = 'n/d',
      num_comments = 0
    } = apiPost;

    return new FeedPost(
      author,
      created,
      id,
      thumbnail,
      title,
      score,
      selftext,
      num_comments
    );
  }
}
