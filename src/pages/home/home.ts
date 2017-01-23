import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 constructor(public navCtrl: NavController) {

 }

trylogin(username,password){
    window.localStorage.setItem('username',username);
    window.localStorage.setItem('password',password);
	this.navCtrl.push(TabsPage);
  }
}
