import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
// use of injectable package so we can injected as a dependency
//create service this way and then add this service to main app.component

//inectable decorator
@Injectable()
export class LoginService{
	
//this is how you make http call in typescript	
	http: any;
	baseUrl: String;

	constructor(http:Http){
	this.http = http;
	this.baseUrl = 'http://www.reddit.com/r';
	}



}