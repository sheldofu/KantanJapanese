import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestServiceProvider } from '../../providers/video-service/video-service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-grammar-list',
  templateUrl: 'grammar-list.html',
})
export class GrammarListPage {

  grammarList: Observable<any>;

  constructor(public videoService: RestServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.grammarList = this.videoService.getLessons();
    console.log(this.grammarList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarListPage');
  }

}

