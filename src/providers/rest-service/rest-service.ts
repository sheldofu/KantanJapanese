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

	apiDomain: string = "http://kantan-api.herokuapp.com/";
  
	constructor(public httpClient: HttpClient) {
		console.log('Hello RestServiceProvider Provider');
	}

  	authenticate() {
		return this.httpClient.post(this.apiDomain + 'token', {
			username: "admin",
			password: "dakarananda95"
		});
	}

	getLessons(token): Observable<any>{
		return this.httpClient.get(this.apiDomain + 'lesson', {
			headers: {
				"authorization": token
			}
		});
	}

}


