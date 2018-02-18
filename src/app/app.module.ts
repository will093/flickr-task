import './rxjs-imports';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlickrFeedDetailComponent } from './components/flickr-feed-detail/flickr-feed-detail.component';
import { FlickrFeedListComponent } from './components/flickr-feed-list/flickr-feed-list.component';
import { FlickrFeedApiService } from './services/flickr-feed-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FlickrFeedListComponent,
    FlickrFeedDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [
    FlickrFeedApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
