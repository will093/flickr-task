import { Component, OnInit } from '@angular/core';

import { FlickrFeedApiService } from '../../services/flickr-feed-api.service';
import { FlickrFeedData } from '../../models/flickr-feed-data';

@Component({
  selector: 'app-flickr-feed-list',
  templateUrl: './flickr-feed-list.component.html',
  styleUrls: ['./flickr-feed-list.component.scss']
})
export class FlickrFeedListComponent implements OnInit {

  flickrFeedData: FlickrFeedData;

  constructor(private flickrFeedApiService: FlickrFeedApiService) { }

  ngOnInit() {
    this.flickrFeedApiService.getFeed('potato').subscribe(data => {
      this.flickrFeedData = data;
    })
  }

}
