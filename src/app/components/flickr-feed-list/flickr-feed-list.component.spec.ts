import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { FlickrFeedListComponent } from './flickr-feed-list.component';

describe('FlickrFeedListComponent', () => {
  let component: FlickrFeedListComponent;
  let fixture: ComponentFixture<FlickrFeedListComponent>;

  let mockRoute;
  let mockFlickrItem = { media: 'test media'} as any;

  beforeEach(async(() => {
    mockRoute = {
      snapshot: {
        data: {
          potatoFlickrFeed: {
            items: [mockFlickrItem]
          }
        }
      }
    }

    TestBed.configureTestingModule({
      declarations: [
        FlickrFeedListComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrFeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {

    it('should set flickrFeedItems from the route data', () => {
      expect(component.flickrFeedItems.length).toEqual(1);
      expect(component.flickrFeedItems[0]).toEqual(mockFlickrItem);
    });
  });
});
