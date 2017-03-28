import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import 'rxjs/add/observable/of';

import { SessionService } from './session-service';
import { SessionPanelComponent } from './session-panel.component';
import { UsersPanelComponent } from '../users-panel/users-panel.component';
import { VotingPanelComponent } from '../voting-panel/voting-panel.component';

import { Session } from '../models/session';

describe('SessionPanelComponent (inline template)', () => {

  let comp:    SessionPanelComponent;
  let fixture: ComponentFixture<SessionPanelComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let sessionService : SessionService;
  let activatedRoute : ActivatedRoute;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [ SessionPanelComponent, UsersPanelComponent, VotingPanelComponent ], 
      providers: [ SessionService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of<Params>({id: '1234abc'})
          }
        } 
      ],
    })
    .compileComponents().then( () => { 
      fixture = TestBed.createComponent(SessionPanelComponent);
      comp = fixture.componentInstance; // SessionPanelComponent test instance
      sessionService = fixture.debugElement.injector.get(SessionService);
    });
  }));
  
  describe('ngOnInit', () => {
    beforeEach(() => {
      let sessionObservable = Observable.of(
        jasmine.createSpyObj('session',
          ['sessionId', 'currentUser', 'users', 'state', 'pointScheme', 'votingRound'])
      );
      
      spyOn(sessionService, 'getSession').and.returnValue(sessionObservable); 
      
      comp.ngOnInit();
    })
    
    it('should use route param as session id', () => { 
      expect(sessionService.getSession).toHaveBeenCalledWith('1234abc'); 
    });
  });

/*    
  describe('onVote', () => {

    beforeEach(() => {
  
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
*/
});
