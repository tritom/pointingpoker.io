import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Role } from '../models/role';
import { User } from '../models/user';
import { Point } from '../models/point';
import { PointScheme } from '../models/point-scheme';
import { Session } from '../models/session';
import { SessionState } from '../models/session-state';

const USERS : User [] = [
 {id: '1', name: "Tommy", role: Role.VotingModerator},
 {id: '2', name: "James", role: Role.Voter},
 {id: '3', name: "Mike", role: Role.Voter},
 {id: '4', name: "Randy", role: Role.Voter},
 {id: '5', name: "Menfis", role: Role.Observer},
 {id: '6', name: "Petro", role: Role.Observer}
]

const POINTS : Point [] = [
 {id: 1, value: 1, label: "1"},
 {id: 2, value: 2, label: "2"},
 {id: 3, value: 3, label: "3"},
 {id: 4, value: 5, label: "5"},
 {id: 5, value: 8, label: "8"},
 {id: 6, value: 13, label: "13"},
 {id: 7, value: 21, label: "21"},
 {id: 8, value: 34, label: "34"},
 {id: 9, value: 55, label: "55"},
 {id: 10, value: 0, label: "?"}
]

const SESSION : Session = {
 sessionId: "1234",
 currentUser: USERS[1],
 users: USERS,
 state: SessionState.VoteInProgress,
 pointScheme: { id: "1", name: "fib", points: POINTS},
 votingRound: { votes: {} }
}

let sessionPromise = Promise.resolve(SESSION);

@Injectable()
export class SessionService {
  getSession(id: number | string): Observable<Session> {
    var sessionObservable = new Observable((observer:Observer<Session>) => {
      observer.next(SESSION);
    })
    return sessionObservable;
  }
}
