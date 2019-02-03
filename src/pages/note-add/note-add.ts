import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { NoteRecorder } from '../../providers/note-recorder-service/note-recorder-service';

@Component({
  selector: 'page-note-add',
  templateUrl: 'note-add.html',
  providers: [NoteRecorder]
})
export class NoteAddPage {

	note = { english: '', japanese: '', audio: '' };

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private sqLite: SQLite,
		public noteRecorder: NoteRecorder
	) {

	}

	addNote() {
		this.sqLite.create({
			name: 'notes.db',
			location: 'default',
		}).then((db: SQLiteObject) => {
			db.executeSql('INSERT INTO notes VALUES(NULL,?,?,?)',[this.note.english,this.note.japanese,this.note.audio])
				.then(res => {
					console.log(res);
				});
			}
		)
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad NoteAddPage');
	}

}
