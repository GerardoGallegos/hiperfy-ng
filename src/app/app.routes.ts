import { RouterModule, Routes } from '@angular/router'
import { BrowseComponent } from './components/browse/browse.component'
import { PlaylistComponent } from './components/playlist/playlist.component'
import { AccountComponent } from './components/account/account.component'

const APP_ROUTES: Routes = [
  { path: 'browse', component: BrowseComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'account', component: AccountComponent },

  { path: '**', pathMatch: 'full', redirectTo: '' }
]

export const app_routing = RouterModule.forRoot(APP_ROUTES) // , { useHash: true }
