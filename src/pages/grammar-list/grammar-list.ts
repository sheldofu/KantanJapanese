import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { RestServiceProvider } from '../../providers/video-service/video-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-grammar-list',
  templateUrl: 'grammar-list.html',
})
export class GrammarListPage {

  grammarListLatest: any = [] //Observable<any>;
  grammarList: any = [];

  constructor(public videoService: RestServiceProvider, public navCtrl: NavController, public navParams: NavParams, private sqLite: SQLite) {
    this.getGrammar();
  }


  checkLatest() {
    //console.log(this.grammarList);
    //for (var key in this.grammarList) {
    //  if (this.grammarList.hasOwnProperty(key)) {
    //    this.grammarList[key]
    //  }
    // }
  }

  updateGrammar() {
    this.videoService.getLessons().subscribe(function onNext(result) {
      this.grammarListLatest = result;
      console.log(this.grammarListLatest);  
    }, function onError(error) {
      console.log('gone wrong')
    });
  }

  getGrammar() {
    this.sqLite.create({
      name: 'notes.db',
      location: 'default',
    }).then((db: SQLiteObject) => {
      db.executeSql(`CREATE TABLE IF NOT EXISTS grammar (
        lessonID INTEGER PRIMARY KEY, 
        lessonName TEXT,
        level INTEGER,
        summary TEXT,
        lessonText TEXT
       )`, [])
      .then(res => {
        console.log('created table') 
      })
      .catch(e => console.log(e));
      
      db.executeSql('SELECT * FROM grammar ORDER BY lessonID DESC', [])
      .then(res => {
        for(var i = 0; i < res.rows.length; i++) {
          this.grammarList.push({
            lessonID: res.rows.item(i).lessonID,
            lessonName: res.rows.item(i).lessonName,
            level: res.rows.item(i).level,
            summary: res.rows.item(i).summary,
            lessonText: res.rows.item(i).lessonText
          })
        }
        console.log(this.grammarList);
      })
      .catch(e => console.log(e))
      .then(() => {
        console.log('test');
        if (this.grammarList.length == 0) {
          console.log('grammar list empty, calling API')
          this.updateGrammar();
        }
      })
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrammarListPage');
  }

}

