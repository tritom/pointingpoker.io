import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';

import { AppComponent }   from './app.component';
import { UsersPanelComponent }   from './users-panel/users-panel.component';
import { VotingPanelComponent }   from './voting-panel/voting-panel.component';
import { SessionPanelComponent }   from './session-panel/session-panel.component';
import { StartPanelComponent }   from './start-panel/start-panel.component';
import { PageNotFoundComponent }   from './not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartPanelComponent },
  { path: 'session/:id', component: SessionPanelComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ { provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [ 
    AppComponent, 
    UsersPanelComponent, 
    VotingPanelComponent, 
    SessionPanelComponent, 
    StartPanelComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
