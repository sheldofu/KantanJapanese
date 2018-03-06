import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { VideoTutorialsPage } from '../video-tutorials/video-tutorials';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController) {

  }

  openPage() { 	
  	this.navCtrl.push(VideoTutorialsPage);
  }

}
