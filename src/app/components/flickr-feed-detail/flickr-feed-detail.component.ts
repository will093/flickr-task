import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlickrFeedItemData } from '../../models/flickr-feed-item-data';

@Component({
  selector: 'app-flickr-feed-detail',
  templateUrl: './flickr-feed-detail.component.html',
  styleUrls: ['./flickr-feed-detail.component.scss']
})
export class FlickrFeedDetailComponent implements OnInit {

  item: FlickrFeedItemData;
  tags: string[];
  description: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.potatoFlickrFeed.items[this.route.snapshot.params.itemIndex];
    this.tags = this.item.tags.split(' ');

    // Limitation: this will break if there are nested p tags.
    const paragraphRegex = new RegExp('<p>(.+?)<\/p>', 'g');
    const paragraphs = this.item.description.match(paragraphRegex);
    this.description = paragraphs[paragraphs.length - 1];
  }
}
