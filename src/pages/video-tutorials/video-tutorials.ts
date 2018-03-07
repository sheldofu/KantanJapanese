import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoServiceProvider } from '../../providers/video-service/video-service';

import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the VideoTutorialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-video-tutorials',
  templateUrl: 'video-tutorials.html',
})
export class VideoTutorialsPage {

  playlist: Observable<any>

  constructor(public videoService: VideoServiceProvider, public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer) {
    this.playlist = this.videoService.getPlaylist();
    console.log(this.playlist);
  }

	openVideo() {
		this.youtube.openVideo('5fpQfuSUcOY');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoTutorialsPage');
  }

}
