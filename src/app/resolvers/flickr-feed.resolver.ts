import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { FlickrFeedData } from '../models/flickr-feed-data';
import { FlickrFeedApiService } from '../services/flickr-feed-api.service';

@Injectable()
export class FlickrFeedResolver implements Resolve<FlickrFeedData> {

  constructor(private flickrFeedApiService: FlickrFeedApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.flickrFeedApiService.getFeed(route.data.flickrTags);
  }
}
