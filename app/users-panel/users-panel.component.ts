import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';
import { SessionState } from '../models/session-state';

@Component({
    selector: 'users-panel',
    template: `
        <div class="usersPanel"> 
          <div class="row header">
            <span class="glyphicon glyphicon-chevron-right"></span>
            Acp Pod</div>
          <div *ngFor="let user of users" class="row user">
            <span [ngSwitch]="user.role" >
              <span *ngSwitchCase="roleTypes.Moderator" aria-hidden="true" class="glyphicon glyphicon-star-empty"></span>
              <span *ngSwitchCase="roleTypes.VotingModerator" aria-hidden="true" class="glyphicon glyphicon-star"></span>
              <span *ngSwitchCase="roleTypes.Voter" aria-hidden="true" class="glyphicon glyphicon-user"></span>
              <span *ngSwitchCase="roleTypes.Observer" aria-hidden="true" class="glyphicon glyphicon-eye-open"></span>
              <span *ngSwitchDefault>other</span>
            </span>
            {{user.name}}
            <span *ngIf="showVotes() && hasVoted(user)" class="voted pull-right glyphicon glyphicon-ok"></span>
            <span *ngIf="showVotes() && !canVote(user)" class="no-vote pull-right glyphicon glyphicon-ban-circle"></span>
            
          </div>
        </div>
    `,
    styleUrls:['app/users-panel/users-panel.component.css']
})
export class UsersPanelComponent { 
  @Input() users : User[];
  @Input() voted : String[] = []; 
  @Input() state : SessionState;
  public roleTypes = Role
  
  hasVoted( user : User ) {
    return this.voted.indexOf(user.id) >= 0
  }

  canVote( user : User ) {
    return user.role === Role.Voter || user.role === Role.VotingModerator
  }

  showVotes() {
    return this.state === SessionState.VoteInProgress;
  }
}

