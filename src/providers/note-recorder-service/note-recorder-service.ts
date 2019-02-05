import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@Injectable()
export class NoteRecorder {

	recording: Boolean;
	playing: Boolean;
	note: MediaObject;

	constructor(
		public alertCtrl: AlertController,
		public media: Media,
		public file: File) {
			this.recording = false;
			this.playing = false;
	}

	startRecording(fileName) {
		try {
			this.note = this.media.create(fileName);
			this.note.startRecord();
			this.recording = true;
			}
		catch (e) {
			this.showAlert('Could not start recording.');
			}
	}

	stopRecording() {
		try {
			this.note.stopRecord();
			this.recording = false;
		}
		catch (e) {
			this.showAlert('Could not stop recording.');
		}
	}

	startPlaying() {
		try {
			this.note.play();
			this.playing = true;
		}
		catch (e) {
			this.showAlert('Could not play recording.');
		}
	}

	stopPlaying() {
		try {
			this.note.stop();
			this.playing = false;
		}
		catch (e) {
			this.showAlert('Could not stop playing recording.');
		}
	}

	loadMedia(fileName) {
		this.note = this.media.create(fileName + ".3gp");
	}

  showAlert(message) {
	let alert = this.alertCtrl.create({
		title: 'Error',
		subTitle: message,
		buttons: ['OK']
	});
	alert.present();
  }

}