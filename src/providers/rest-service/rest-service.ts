import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
 
/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class RestServiceProvider {

  getApiUrl: string = "http://demo4488197.mockable.io/";
  
  constructor(public httpClient: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getLessons(): Observable<any>{
	  return this.httpClient.get(this.getApiUrl);
  }

  getLessonById() {

  }

}


