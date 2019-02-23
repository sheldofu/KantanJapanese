import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { NoteRecorder } from '../../providers/note-recorder-service/note-recorder-service';

/**
 * Generated class for the GrammarViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-grammar-view',
  templateUrl: 'grammar-view.html',
})
export class GrammarViewPage {

	grammar = { lessonID: 0 };

	constructor(
		public noteRecorder: NoteRecorder, 
		private sqLite: SQLite, 
		public navCtrl: NavController, 
		public navParams: NavParams) {
			this.getGrammar(navParams.get("id"));
	}

	getGrammar(id) {
		this.sqLite.create({
			name: 'notes.db',
			location: 'default',
		}).then((db: SQLiteObject) => {
			db.executeSql('SELECT * FROM grammar where id=?',[id])
			.then(res => {
				if(res.rows.length > 0) {
						this.grammar.lessonID = res.rows.item(0).lessonID;
				}
				console.log(this.grammar);
			})
			.catch(e => console.log(e));
			}
		).catch(e => console.log(e));
	}

  ionViewDidLoad() {
	console.log('ionViewDidLoad GrammarViewPage');
  }

}
