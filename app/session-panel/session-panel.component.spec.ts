import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { SessionService } from './session-service';
import { SessionPanelComponent } from './session-panel.component';
import { UsersPanelComponent } from '../users-panel/users-panel.component';
import { VotingPanelComponent } from '../voting-panel/voting-panel.component';

import { User } from '../models/user';
import { Role } from '../models/role';
import { Point } from '../models/point'; import { Session } from '../models/session';
import { SessionState } from '../models/session-state';
import { VotingRound } from '../models/voting-round';

describe('SessionPanelComponent (inline template)', () => {

  let comp:    SessionPanelComponent;
  let fixture: ComponentFixture<SessionPanelComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let testSession : Session;
  let observable : Observable<Session>; 
  let sessionService : SessionService;

  const testUsers : User[] = [
    {id: 'u1', name: "tommy", role: Role.Moderator},
    {id: 'u2', name: "bob", role: Role.Voter}
  ]; 

  const testPoints : Point [] = [
   {id: 1, value: 1, label: "1"},
   {id: 2, value: 2, label: "2"},
   {id: 3, value: 3, label: "3"}
  ];

  beforeEach( () => {
    testSession = {
       sessionId: "1234",
       currentUser: testUsers[0],
       users: testUsers,
       state: SessionState.VoteInProgress,
       pointScheme: { id: "1", name: "test", points: testPoints},
       votingRound : new VotingRound()
    };
    
    observable = new Observable( (observer:Observer<Session>) => {
      observer.next(testSession);
    })
  });

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [ SessionPanelComponent, UsersPanelComponent, VotingPanelComponent ], 
      providers: [ SessionService ],
    })
    .compileComponents().then( () => { 
      fixture = TestBed.createComponent(SessionPanelComponent);
      comp = fixture.componentInstance; // SessionPanelComponent test instance
      sessionService = fixture.debugElement.injector.get(SessionService);
    });
  }));
  
  it('displays points for VoteInProgress state', () => {
    fixture.detectChanges();
    el = fixture.nativeElement;
    expect(el.textContent).toContain(testPoints[0].label);
  });

  describe('onVote', () => {

    beforeEach(() => {
      spyOn(sessionService, 'getSession').and.returnValue(observable); 
      comp.ngOnInit();
    })
    
    it('should add user vote to vote tally', () => {
      fixture.detectChanges();
      expect(comp.session.votingRound.votes['u1']).toBeUndefined();
      
      comp.onVote(testPoints[0]);

      fixture.detectChanges();
      expect(comp.session.votingRound.votes['u1']).toEqual(testPoints[0]);
    });
    
    it('should clear user vote from vote tally if null', () => {
      fixture.detectChanges();
      comp.onVote(testPoints[0]);
      fixture.detectChanges();
      
      expect(comp.session.votingRound.votes['u1']).toEqual(testPoints[0]);
      expect(comp.voted.length).toEqual(1);
      
      comp.onVote(null);
      fixture.detectChanges();
      
      expect(comp.session.votingRound.votes['u1']).toEqual(undefined);
      expect(comp.voted.length).toEqual(0);
    });
  });
});
