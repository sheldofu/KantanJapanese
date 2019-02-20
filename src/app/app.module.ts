import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { SQLite } from '@ionic-native/sqlite';
import { HttpClientModule } from '@angular/common/http'; 

import { VideoTutorialsPage } from '../pages/video-tutorials/video-tutorials';
import { NoteListPage} from '../pages/note-list/note-list';
import { NoteAddPage} from '../pages/note-add/note-add';
import { NoteEditPage} from '../pages/note-edit/note-edit';
import { GrammarListPage } from '../pages/grammar-list/grammar-list';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestServiceProvider } from '../providers/video-service/video-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VideoTutorialsPage,
    NoteListPage,
    NoteAddPage,
    NoteEditPage,
    GrammarListPage
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
    NoteListPage,
    NoteAddPage,
    NoteEditPage,
    GrammarListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestServiceProvider,
    Media,
    File,
    SQLite
  ]
})
export class AppModule {}
