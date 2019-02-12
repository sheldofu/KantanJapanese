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
	fileName: String = "";

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private sqLite: SQLite,
		public noteRecorder: NoteRecorder
	) {

	}

	startRecording() {
		this.note.audio = (Math.random() + 1).toString(36).substring(5);
		console.log(this.note.audio);
		this.noteRecorder.startRecording(this.note.audio + ".3gp");
	}

	addNote() {
		this.sqLite.create({
			name: 'notes.db',
			location: 'default',
		}).then((db: SQLiteObject) => {
			db.executeSql('INSERT INTO notes VALUES(NULL,?,?,?)',[this.note.english,this.note.japanese,this.note.audio])
				.then(res => {
					console.log(res);
					this.navCtrl.pop();
				});
			}
		)
	}


	ionViewDidLoad() {
		console.log('ionViewDidLoad NoteAddPage');
	}

}
