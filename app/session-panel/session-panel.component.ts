import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { Point } from '../models/point';
import { PointScheme } from '../models/point-scheme';
import { Session } from '../models/session';
import { SessionState } from '../models/session-state';

@Component({
    selector: 'session-panel',
    template: `
      <div class="header row">
        <div *ngIf="voteInProgress()" class="col-md-12">
          <h3><span class="glyphicon glyphicon-ok-circle"></span> Cast Your Vote </h3>
          <hr>
        </div>
      </div>
      <div class="action row">
        <div class="col-xs-12 col-sm-6 col-md-3">
          <users-panel [state]="session.state" [users]="session.users" [voted]="voted">
          </users-panel>
        </div>
        <div *ngIf="voteInProgress()" class="col-xs-12 col-sm-6 col-md-8">
          <voting-panel [points]="session.pointScheme.points"
                        (vote) = "onVote($event)" >
          </voting-panel>
        </div>
      </div>
    `,
    styleUrls:['app/session-panel/session-panel.component.css']
})

export class SessionPanelComponent { 
  @Input() session : Session;
  states = SessionState;
  voted : String[] = [];

  voteInProgress() {
    return this.session.state === SessionState.VoteInProgress;
  }

  onVote(point:Point) {
    if (point) {
      this.session.votingRound.votes[this.session.currentUser.id] = point;
    } else {
      delete this.session.votingRound.votes[this.session.currentUser.id];
    }

    this.voted = (Object.keys(this.session.votingRound.votes));
  }
}
