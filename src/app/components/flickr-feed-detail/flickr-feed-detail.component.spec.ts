import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrFeedDetailComponent } from './flickr-feed-detail.component';

describe('FlickrFeedDetailComponent', () => {
  let component: FlickrFeedDetailComponent;
  let fixture: ComponentFixture<FlickrFeedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrFeedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrFeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
