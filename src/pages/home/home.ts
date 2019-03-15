import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { VideoTutorialsPage } from '../video-tutorials/video-tutorials';
import { NoteListPage } from '../note-list/note-list';
import { GrammarListPage } from '../grammar-list/grammar-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController) {

  }

  openVideoPage() { 	
  	this.navCtrl.push(VideoTutorialsPage);
  }

  openNoteListPage() {
  	this.navCtrl.push(NoteListPage);
  }

  openGrammarPage() {
  	this.navCtrl.push(GrammarListPage);
  }


}
