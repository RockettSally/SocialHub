import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }

  get(resource) {
    // this.loader.showStandardLoader();
    return this.http.get(resource)
      // .timeout(30000)
      .map(resp => resp.json()).finally(() => {
        // this.loader.hideLoader();
      });
  }

  post(resource, body) {
    // this.loader.showStandardLoader();
    return this.http.post(resource, body)
      // .timeout(30000)
      .map(resp => resp.json()).finally(() => {
        // this.loader.hideLoader();
      });
  }

}
