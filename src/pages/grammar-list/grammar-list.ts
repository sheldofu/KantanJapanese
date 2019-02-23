import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
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
    this.videoService.getLessons().map(result => result).subscribe((result: any) => {
      this.grammarListLatest = result; 
      console.log(result);
      this.storeUpdate(); 
      this.getGrammar();
    }, function onError(error) {
      console.log('gone wrong')
    }           
   );
  }

  storeUpdate() {
    this.sqLite.create({
          name: 'notes.db',
          location: 'default',
        }).then((db: SQLiteObject) => {
            for (var x = 0; x < this.grammarListLatest.grammarList.length; x++) {
              db.executeSql('INSERT INTO grammar VALUES(?,?,?,?,?)', [this.grammarListLatest.grammarList[x].lessonID, this.grammarListLatest.grammarList[x].lessonName, 1, "r", "c"])
            }
          })
          .then(res => {
            console.log('created table', this.grammarListLatest) 
          }) 
          .catch(e => console.log(e));
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
        console.log('created table xyz') 
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

