import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';

@Component({
    selector: 'users-panel',
    template: `
        <div class="usersPanel"> 
          <div *ngFor="let user of users" class="user">
            <span [ngSwitch]="user.role">
              <span *ngSwitchCase="roleTypes.Moderator" aria-hidden="true" class="glyphicon glyphicon-star-empty"></span>
              <span *ngSwitchCase="roleTypes.VotingModerator" aria-hidden="true" class="glyphicon glyphicon-star"></span>
              <span *ngSwitchCase="roleTypes.Voter" aria-hidden="true" class="glyphicon glyphicon-user"></span>
              <span *ngSwitchCase="roleTypes.Observer" aria-hidden="true" class="glyphicon glyphicon-eye-open"></span>
              <span *ngSwitchDefault>other</span>
            </span>
            {{user.name}}
          </div>
        </div>
    `,
    styleUrls:['app/users-panel/users-panel.component.css']
})
export class UsersPanelComponent { 
  @Input() users : User[];
  public roleTypes = Role
}

