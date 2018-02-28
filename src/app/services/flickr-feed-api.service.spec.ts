import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { FlickrFeedApiService } from './flickr-feed-api.service';

describe('FlickrFeedApiService', () => {

  let mockHttpClient;

  beforeEach(() => {

    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['jsonp']);

    TestBed.configureTestingModule({
      providers: [
        FlickrFeedApiService,
        { provide: HttpClient, useValue: mockHttpClient }
      ]
    });
  });

  describe('getSingle', () => {

    it('should call jsonp with a url containing the correct tags, format and jsoncallback query string parameters.', inject([FlickrFeedApiService], (service: FlickrFeedApiService) => {
      const testTags = 'testTags1 testTag2';
      service.getFeed(testTags);

      const url = mockHttpClient.jsonp.calls.mostRecent().args[0];
      expect(url).toEqual('https://api.flickr.com/services/feeds/photos_public.gne?tags=testTags1%20testTag2&format=json&jsoncallback=JSON_CALLBACK');
    }));

    it('should call jsonp with correct callback.', inject([FlickrFeedApiService], (service: FlickrFeedApiService) => {
      const testTags = 'testTags1 testTag2';
      service.getFeed(testTags);

      const callback = mockHttpClient.jsonp.calls.mostRecent().args[1];
      expect(callback).toEqual('jsoncallback');
    }));

    it('should return the contents of the API response.', inject([FlickrFeedApiService], (service: FlickrFeedApiService) => {
      const testResponse = 'testResponse';
      mockHttpClient.jsonp.and.returnValue(Observable.of(testResponse))
      const testId = 'testId';

      let result;
      service.getFeed(testId).subscribe(feedData => {
        result = feedData;
      });

      expect(result).toEqual(testResponse);
    }));
  });
});
