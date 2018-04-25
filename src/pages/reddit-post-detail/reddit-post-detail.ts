import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RedditPostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reddit-post-detail',
  templateUrl: 'reddit-post-detail.html',
})
export class RedditPostDetailPage {

  item: any;
  pictureAllowed: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    if(this.item.spoiler){
      this.pictureAllowed = false;
    } else {
      this.pictureAllowed = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditPostDetailPage');
  }

  showPic(event){
    console.log(this.pictureAllowed);
    this.pictureAllowed === false ? this.pictureAllowed = true : this.pictureAllowed = false;
  }

}
