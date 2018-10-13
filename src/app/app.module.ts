import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowseComponent } from './components/browse/browse.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { AccountComponent } from './components/account/account.component';
import { PlayerComponent } from './components/shared/player/player.component';
import { AudiotimePipe } from './pipes/audiotime/audiotime.pipe';
import { NewPlaylistComponent } from './components/new-playlist/new-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrowseComponent,
    PlaylistComponent,
    AccountComponent,
    PlayerComponent,
    AudiotimePipe,
    NewPlaylistComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
