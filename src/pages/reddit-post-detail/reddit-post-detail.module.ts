import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedditPostDetailPage } from './reddit-post-detail';

@NgModule({
  declarations: [
    RedditPostDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RedditPostDetailPage),
  ],
})
export class RedditPostDetailPageModule {}
