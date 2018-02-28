import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { FlickrFeedDetailComponent } from './flickr-feed-detail.component';

describe('FlickrFeedDetailComponent', () => {
  let component: FlickrFeedDetailComponent;
  let fixture: ComponentFixture<FlickrFeedDetailComponent>;

  let mockRoute, mockItem1, mockItem2;

  beforeEach(async(() => {
    mockItem1 = {};
    mockItem2 = { tags: 'a b c-d', description: '<p>Test</p><p><em>Description</em></p>', media: 'test media' };

    mockRoute = {
      snapshot: {
        params: {
          itemIndex: 1
        },
        data: {
          potatoFlickrFeed: {
            items: [
              mockItem1,
              mockItem2
            ]
          }
        }
      }
    }

    TestBed.configureTestingModule({
      declarations: [
        FlickrFeedDetailComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrFeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set item to the flickrFeedItem of the index given in the route params.', () => {
    expect(component.item).toEqual(mockItem2);
  });

  it('should set paragraphs to the last instance of a p tag in the item description..', () => {
    expect(component.description).toEqual('<p><em>Description</em></p>');
  });

  it('should map space seperated tags in route data to an array of tags.', () => {
    expect(component.tags).toEqual(['a', 'b', 'c-d']);
  });
});
