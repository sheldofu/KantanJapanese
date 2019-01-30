import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NoteRecorder } from '../../providers/note-recorder-service/note-recorder-service';

@Component({
  selector: 'page-recorder',
  templateUrl: 'recorder.html',
  providers: [NoteRecorder]
})
export class RecorderPage {

	constructor(
			public noteRecorder: NoteRecorder,
			public navCtrl: NavController, 
			public navParams: NavParams
	) {

	}

	startRec() { this.noteRecorder.startRecording() }
	stopRec() { this.noteRecorder.stopRecording() }
	startPlay() { this.noteRecorder.startPlaying() }
	stopPlay() { this.noteRecorder.stopPlaying() }

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecorderPage');
	}

}
