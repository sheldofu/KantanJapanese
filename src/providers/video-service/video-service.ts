import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
 
/*
  Generated class for the VideoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class VideoServiceProvider {

	getApiUrl: string = "assets/data/playlist.json"; //file:///android_asset/www/

  constructor(public http: HttpClient) {
    console.log('Hello VideoServiceProvider Provider');
  }

  getPlaylist() {
	  return this.http.get(this.getApiUrl);
  }    

}


