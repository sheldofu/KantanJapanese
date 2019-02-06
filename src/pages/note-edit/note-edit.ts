import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { NoteRecorder } from '../../providers/note-recorder-service/note-recorder-service';

/**
 * Generated class for the NoteEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-note-edit',
  templateUrl: 'note-edit.html',
  providers: [NoteRecorder]
})
export class NoteEditPage {

  note = { id: 0, english: '', japanese: '', audio: '' };

	constructor(
		public noteRecorder: NoteRecorder, 
		private sqLite: SQLite, 
		public navCtrl: NavController, 
		public navParams: NavParams) {
			this.getNote(navParams.get("id"));
	}

	startPlaying(){
		this.noteRecorder.loadMedia(this.note.audio);
		this.noteRecorder.startPlaying();
	}

	getNote(id) {
		this.sqLite.create({
			name: 'notes.db',
			location: 'default',
		}).then((db: SQLiteObject) => {
			db.executeSql('SELECT * FROM notes where id=?',[id])
		    .then(res => {
				if(res.rows.length > 0) {
			            this.note.id = res.rows.item(0).id;
						this.note.english = res.rows.item(0).english;
						this.note.japanese = res.rows.item(0).japanese;
						this.note.audio = res.rows.item(0).audio;
				}
				console.log(this.note);
			})
			.catch(e => console.log(e));
			}
		).catch(e => console.log(e));
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NoteEditPage');
	}

}
