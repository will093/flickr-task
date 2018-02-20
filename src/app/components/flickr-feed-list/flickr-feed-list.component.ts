import { Component, OnInit } from '@angular/core';

import { FlickrFeedData } from '../../models/flickr-feed-data';
import { FlickrFeedApiService } from '../../services/flickr-feed-api.service';
import { FlickrFeedItemData } from '../../models/flickr-feed-item-data';

@Component({
  selector: 'app-flickr-feed-list',
  templateUrl: './flickr-feed-list.component.html',
  styleUrls: ['./flickr-feed-list.component.scss']
})
export class FlickrFeedListComponent implements OnInit {

  flickrFeedData: FlickrFeedData;
  flickrFeedItems: FlickrFeedItemData[];

  constructor(private flickrFeedApiService: FlickrFeedApiService) { }

  ngOnInit() {
    this.flickrFeedItems = [];
    
    this.flickrFeedApiService.getFeed('potato').subscribe(data => {
      this.flickrFeedData = data;
      this.flickrFeedItems = data.items;
    })
  }

}
