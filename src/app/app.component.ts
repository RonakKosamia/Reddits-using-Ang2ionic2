import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import{ RedditService } from './services/reddit.service';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import{ Auth} from '../providers/auth';

@Component({
  templateUrl: 'app.html',
  providers: [RedditService,Auth]
})
export class MyApp {
  rootPage:any= HomePage;
  loader: any;
  
  constructor(public auth : Auth , public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.auth.login().then((isLoggedIn) => {
      if(isLoggedIn){
       
      this.rootPage = TabsPage;
      }else{
       this.rootPage = HomePage;
      }
      this.loader.dismiss();
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating...",
     // duration: 3000
    });
    this.loader.present();
  }
}
