import { Component } from '@angular/core';
//import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import { RedditsPage } from '../reddits/reddits'; 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RedditsPage;
 // tab2Root: any = HomePage;
  tab2Root: any = SettingsPage;
  tab3Root: any = ContactPage;
  tab4Root: any = AboutPage;
  
 	
 
  constructor() {

  }

 
}
