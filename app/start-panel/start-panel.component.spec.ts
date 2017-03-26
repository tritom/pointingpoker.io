import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Router } from '@angular/router';
import { StartPanelComponent } from './start-panel.component';

describe('StartPanelComponent (inline template)', () => {

  let comp:    StartPanelComponent;
  let fixture: ComponentFixture<StartPanelComponent>;
  let selected: DebugElement;
  let el:      HTMLElement;

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [ StartPanelComponent ], // declare the test component
      providers: [ 
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");} } 
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(StartPanelComponent); 
      comp = fixture.componentInstance; // StartPanelComponent test instance
    });
  }));
  
  it('should route to session with id', inject([Router], (router : Router) => {
    var sessionId = "SESSIONID";
    fixture.detectChanges();

    comp.joinSession(sessionId);
    expect(router.navigate).toHaveBeenCalledWith(['/session', 'SESSIONID']);
  }));
  
  it('should not route to session if missing session id', inject([Router], (router : Router) => {
    fixture.detectChanges();

    comp.joinSession(null);
    comp.joinSession(undefined);
    comp.joinSession("");
    comp.joinSession(" ");
    expect(router.navigate).not.toHaveBeenCalled();
  }));
});
