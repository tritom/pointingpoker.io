import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { UsersPanelComponent }   from './users-panel/users-panel.component';
import { VotingPanelComponent }   from './voting-panel/voting-panel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UsersPanelComponent, VotingPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
