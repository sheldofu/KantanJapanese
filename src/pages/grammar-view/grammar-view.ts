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
  providers: [NoteRecorder]
})
export class GrammarViewPage {

	grammar = { 
		lessonID: 0,
		lessonName: "",
		level: 0,
		summary: "",
		lessonText: "",
		examples: []
	};

	constructor(
		public noteRecorder: NoteRecorder, 
		private sqLite: SQLite, 
		public navCtrl: NavController, 
		public navParams: NavParams) {
			this.getGrammar(navParams.get("lessonID"));
	}

	getGrammar(id) {
		this.sqLite.create({
			name: 'notes.db',
			location: 'default',
		}).then((db: SQLiteObject) => {
			db.executeSql('SELECT * FROM grammar where lessonID=?',[id])
			.then(res => {
				if(res.rows.length > 0) {
					this.grammar.lessonID = res.rows.item(0).lessonID;
					this.grammar.lessonName = res.rows.item(0).lessonName,
					this.grammar.level = res.rows.item(0).level,
					this.grammar.summary = res.rows.item(0).summary,
					this.grammar.lessonText = res.rows.item(0).lessonText
				}
				console.log(this.grammar);
			})
			.catch(e => console.log(e));
			
			db.executeSql('SELECT * FROM examples where lessonID=?',[id])
			.then(res => {
				for(var i = 0; i < res.rows.length; i++) {
				  this.grammar.examples[i].push({
					english: res.rows.item(i).english,
					japanese: res.rows.item(i).japanese,
				  })
				}
			})
			
		}).catch(e => console.log(e));
	}

  ionViewDidLoad() {
	console.log('ionViewDidLoad GrammarViewPage');
  }

}
