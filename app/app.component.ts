import { Component } from '@angular/core';
import { Role } from './models/role';
import { User } from './models/user';
import { Point } from './models/point';

const USERS : User [] = [
 {id: 1, name: "Tommy", role: Role.VotingModerator},
 {id: 1, name: "James", role: Role.Voter},
 {id: 1, name: "Mike", role: Role.Voter},
 {id: 1, name: "Randy", role: Role.Voter},
 {id: 1, name: "Menfis", role: Role.Observer},
 {id: 1, name: "Petro", role: Role.Observer}
];

const POINTS : Point [] = [ 
 {id: 1, value: 1, label: "1"},
 {id: 2, value: 2, label: "2"},
 {id: 3, value: 3, label: "3"},
 {id: 4, value: 5, label: "5"},
 {id: 5, value: 8, label: "8"},
 {id: 6, value: 13, label: "13"},
 {id: 7, value: 21, label: "21"},
 {id: 8, value: 0, label: "?"}
]

@Component({
    selector: 'my-app',
    template: `
      <div class="row">
        <div class="col-xs-5 col-md-3">
          <users-panel [users]="users">
          </users-panel>
        </div>
        <div class="col-xs-7 col-sm-6 col-md-8">
          <voting-panel [pointScheme]="pointScheme">
          </voting-panel>
        </div>
      </div>
      `
})
export class AppComponent { 
  users = USERS;
  pointScheme = POINTS;
}
