import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { VideoTutorialsPage } from '../video-tutorials/video-tutorials';
import { RecorderPage } from '../recorder/recorder';
import { NoteListPage } from '../note-list/note-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController) {

  }

  openPage(page) { 	
  	//this.navCtrl.push(VideoTutorialsPage);
  	this.navCtrl.push(NoteListPage);
  }

}
