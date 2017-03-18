import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { StartPanelComponent } from './start-panel.component';

describe('StartPanelComponent (inline template)', () => {

  let comp:    StartPanelComponent;
  let fixture: ComponentFixture<StartPanelComponent>;
  let selected: DebugElement;
  let el:      HTMLElement;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [ StartPanelComponent ], // declare the test component
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(StartPanelComponent); 
      comp = fixture.componentInstance; // StartPanelComponent test instance
    });
  }));
  
  it('should emit join event', (done) => {
    var sessionId : String = "SESSIONID";
    fixture.detectChanges();

    comp.join.subscribe( (session : String) => {
      expect(session).toEqual(sessionId);
      done();
    });

    comp.joinSession(sessionId);
  });
  
});
