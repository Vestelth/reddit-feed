import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
  text: string | null;

  constructor(private feedService: FeedService) {}

  ngOnInit() {
    this.text = this.feedService.getText();
  }
}
