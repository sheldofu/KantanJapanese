import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-recorder',
  templateUrl: 'recorder.html',
})
export class RecorderPage {

	status: string;
	filePath: string;
	recording: Boolean;
	playing: Boolean;
	note: MediaObject;

	constructor(public navCtrl: NavController, 
		public navParams: NavParams, 
		public alertCtrl: AlertController,
		private media: Media,
		private file: File) {
			this.recording = false;
			this.playing = false;
	}

	ionViewDidEnter() {
	}

	startRecording() {
		try {
			this.filePath = "sherunu.3gp";
			this.note = this.media.create(this.filePath);
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

	startPlayback() {
		try {
			this.note.play();
			this.playing = true;
		}
		catch (e) {
			this.showAlert('Could not play recording.');
		}
	}

	stopPlayback() {
		try {
			this.note.stop();
			this.playing = false;
		}
		catch (e) {
			this.showAlert('Could not stop playing recording.');
		}
	}

  showAlert(message) {
	let alert = this.alertCtrl.create({
		title: 'Error',
		subTitle: message,
		buttons: ['OK']
	});
	alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecorderPage');
  }

}
