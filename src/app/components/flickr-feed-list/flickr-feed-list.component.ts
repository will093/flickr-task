import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlickrFeedItemData } from '../../models/flickr-feed-item-data';

@Component({
  selector: 'app-flickr-feed-list',
  templateUrl: './flickr-feed-list.component.html',
  styleUrls: ['./flickr-feed-list.component.scss']
})
export class FlickrFeedListComponent implements OnInit {

  flickrFeedItems: FlickrFeedItemData[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.flickrFeedItems = this.route.snapshot.data.potatoFlickrFeed.items;
  }
}
