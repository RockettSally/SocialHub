import { HttpServiceProvider } from './../http-service/http-service';
import { Injectable } from '@angular/core';

/*
  Generated class for the RedditServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditServiceProvider {

  endpoint: string = 'https://www.reddit.com/r';

  constructor(public http: HttpServiceProvider) {
    console.log('Hello RedditServiceProvider Provider');
  }

  getPosts(category, limit){
    return new Promise((resolve, reject) =>{ 
			this.http.get(this.endpoint+'/'+category+'/top.json?limit='+limit).subscribe(res =>{
					// console.log(JSON.stringify(res));
					resolve(res);
				}, (err) =>{
					reject(err);
				});
		});
  }

}
