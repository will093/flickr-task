import { FlickrFeedItemData } from "./flickr-feed-item-data";

export interface FlickrFeedData {
    title: string;
    link: string;
    description: string;
    modified: string;
    generator: string;
    items: FlickrFeedItemData[];
}