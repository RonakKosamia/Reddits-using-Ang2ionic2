import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import created service on to the page where you need data
import{ RedditService } from '../../app/services/reddit.service';
import{DetailsPage} from '../details/details';
/*
  Generated class for the Reddits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

//after importing service in the page, inject service as dependency
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

	items: any;
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService:RedditService) {
  //here what navController does is to help you 'switch pages' in application
  this.getDefaults();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditsPage');

    this.getPosts(this.category,this.limit);
  }
  //this is lifecycle hook, this runs whenever component is rendered
  ngOnInit(){
  	console.log('oninit ran.....');
    this.getPosts(this.category,this.limit);
  }

 
  getDefaults(){
      if(localStorage.getItem('category') != null){
        this.category = localStorage.getItem('category');
      } else {
        this.category = 'sports';
      }

      if(localStorage.getItem('limit') != null){
        this.limit = localStorage.getItem('limit');
      } else {
        this.limit = '10';
      }
  }

  //here we will get json data in response
  getPosts(category, limit){

  	this.redditService.getPosts(category,limit).subscribe(response =>{
  	console.log(response);
  	this.items = response.data.children;
  	});

  }

  viewItem(item){
  	this.navCtrl.push(DetailsPage,{
  		item:item
  	});
  }

  changeCategory(){

     this.getPosts(this.category,this.limit);

  }


}
