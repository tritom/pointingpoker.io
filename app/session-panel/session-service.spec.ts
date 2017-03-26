import { async, fakeAsync, tick, inject, TestBed } from '@angular/core/testing';
import { SessionService } from './session-service';

describe('service: SessionService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SessionService
      ]
    });
  });

  describe('getSession()', () => { 
    let sut : SessionService;

    beforeEach(
      inject( [SessionService], (sessionService:SessionService) => { 
      sut = sessionService;
    }));

    it('should return a session', async( () => {
     
      sut.getSession('abcd').subscribe(session => {
        expect(session.sessionId).toEqual("1234");
      });
    }))
  });

});
