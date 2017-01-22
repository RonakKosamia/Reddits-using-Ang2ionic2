import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import created service on to the page where you need data
import{ RedditService } from '../../app/services/reddit.service';
import{RedditsPage} from '../reddits/reddits';

//after importing service in the page, inject service as dependency
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  category: any;
  limit: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService:RedditService) {
  //here what navController does is to help you 'switch pages' in application
  this.getDefaults();

  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
   // this.getPosts(this.category,this.limit);
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

  setDefaults(){

    localStorage.setItem('category', this.category);
     localStorage.setItem('limit', this.limit);
     this.navCtrl.push(RedditsPage);

  }


}
