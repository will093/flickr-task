import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlickrFeedDetailComponent } from './components/flickr-feed-detail/flickr-feed-detail.component';
import { FlickrFeedListComponent } from './components/flickr-feed-list/flickr-feed-list.component';
import { FlickrFeedResolver } from './resolvers/flickr-feed.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      potatoFlickrFeed: FlickrFeedResolver,
    },
    data: {
      flickrTags: 'potato'
    },
    children: [
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: FlickrFeedListComponent,
      },
      {
        path: 'detail/:itemIndex',
        component: FlickrFeedDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }