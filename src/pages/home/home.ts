import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditServiceProvider } from './../../providers/reddit-service/reddit-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  posts: any = [];
  categories: Array<{value: string, name: string}> = [];
  chosenCategory: string = null;
  subcategories: Array<{value: string, name: string}> = [];
  chosenSubCategory: string = null;
  limit: Array<{value: string, name: string}> = [];

  constructor(public navCtrl: NavController, public redditService: RedditServiceProvider) {
    this.chosenCategory = localStorage.getItem('chosenCategory');
    this.getCategories();
    if(this.chosenCategory){
      this.getSubCategories(this.chosenCategory);
    }
    this.chosenSubCategory = localStorage.getItem('chosenSubCategory');
    if(this.chosenSubCategory){
      this.getRedditPosts();
    }
  }

  getCategories(){
    this.categories = [];

    this.categories.push({value: 'games', name: 'Games'});
    this.categories.push({value: 'politics', name: 'Politics'});
    this.categories.push({value: 'lulz', name: 'LULZ'});
    this.categories.push({value: 'sports', name: 'Sports'});
    this.categories.push({value: 'cute', name: 'Cute Stuff'});
    this.categories.push({value: 'misc', name: 'Misc'});
  }

  getSubCategories(category){
    this.subcategories = [];
    this.chosenCategory = category;
    localStorage.setItem('chosenCategory',this.chosenCategory);
    this.chosenSubCategory = null;
    if(localStorage.getItem('chosenSubCategory')){
      localStorage.removeItem('chosenSubCategory');
    }

    switch(category){
      case 'games':
        this.subcategories.push({value: 'PS4', name: 'Playstation 4'});
        this.subcategories.push({value: 'gaming', name: 'Gaming'});
        this.subcategories.push({value: 'truegaming', name: 'True Gaming'});
        break;

      case 'politics':
        this.subcategories.push({value: 'The_Donald', name: 'Donald Trump'});
        this.subcategories.push({value: 'news', name: 'News'});
        break;

      case 'lulz':
        this.subcategories.push({value: 'wtf', name: 'What The F***'});
        this.subcategories.push({value: 'funny', name: 'Funny'});
        break;

      case 'sports':
        this.subcategories.push({value: 'sports', name: 'Sports'});
        this.subcategories.push({value: 'nfl', name: 'NFL - American Football'});
        this.subcategories.push({value: 'nba', name: 'NBA - Basketball'});
        this.subcategories.push({value: 'mlb', name: 'MLB - Baseball'});
        this.subcategories.push({value: 'esports', name: 'E-Sports'});
        break;

      case 'cute':
        this.subcategories.push({value: 'aww', name: 'Cute Stuff'});
        this.subcategories.push({value: 'cats', name: 'Cats'});
        this.subcategories.push({value: 'dogs', name: 'Dogs'});
        break;

      case 'misc':
        this.subcategories.push({value: 'pics', name: 'Pics'});
        this.subcategories.push({value: 'movies', name: 'Movies'});
        this.subcategories.push({value: 'art', name: 'Arts'});
        this.subcategories.push({value: 'gifs', name: 'GIFs'});
        this.subcategories.push({value: 'todayilearned', name: 'Today I Learned'});
        break;
    }
  }

  setSubCategory(){

  }

  getRedditPosts(){
    if(this.chosenCategory || this.chosenSubCategory){
      
    }
  }

}
