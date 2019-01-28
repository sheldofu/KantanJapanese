import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { HttpClientModule } from '@angular/common/http'; 

import { VideoTutorialsPage } from '../pages/video-tutorials/video-tutorials';
import { RecorderPage } from '../pages/recorder/recorder';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VideoServiceProvider } from '../providers/video-service/video-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VideoTutorialsPage,
    RecorderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideoTutorialsPage,
    RecorderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoServiceProvider,
    Media,
    File
  ]
})
export class AppModule {}
