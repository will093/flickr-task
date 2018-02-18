import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FlickrFeedData } from '../models/flickr-feed-data';

@Injectable()
export class FlickrFeedApiService {

  constructor(private httpClient: HttpClient) { }

  getFeed(tags: string): Observable<FlickrFeedData> {
    let params = new HttpParams();
    params = params.append('tags', tags);
    params = params.append('format', 'json');
    params = params.append('jsoncallback', 'JSON_CALLBACK');
    return this.httpClient.jsonp<FlickrFeedData>(
      `https://api.flickr.com/services/feeds/photos_public.gne?${params}`, 'jsoncallback');
  }
}
