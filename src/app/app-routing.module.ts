import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlickrFeedListComponent } from './components/flickr-feed-list/flickr-feed-list.component';
import { FlickrFeedDetailComponent } from './components/flickr-feed-detail/flickr-feed-detail.component';

const routes: Routes = [
  {
    path: '',
    component: FlickrFeedListComponent
  },
  {
    path: 'detail',
    component: FlickrFeedDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }