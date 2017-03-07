import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { UsersPanelComponent } from './users-panel.component';
import { User } from '../models/user';
import { Role } from '../models/role';
import { SessionState } from '../models/session-state';

describe('UsersPanelComponent (inline template)', () => {

  let comp:    UsersPanelComponent;
  let fixture: ComponentFixture<UsersPanelComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  const testUsers : User[] = [
    {id: 'u1', name: "tommy", role: Role.Moderator},
    {id: 'u2', name: "tom", role: Role.VotingModerator},
    {id: 'u3', name: "james", role: Role.Voter},
    {id: 'u4', name: "george", role: Role.Observer}
  ];  

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [ UsersPanelComponent ], // declare the test component
    })
    .compileComponents().then( () => {
      fixture = TestBed.createComponent(UsersPanelComponent);
      comp = fixture.componentInstance; // UsersPanelComponent test instance
    });
  }));
  
  it('displays name of each user', () => {
    comp.users = testUsers;
    fixture.detectChanges();
    el = fixture.nativeElement;
    expect(el.textContent).toContain(testUsers[0].name);
    expect(el.textContent).toContain(testUsers[1].name);
    expect(el.textContent).toContain(testUsers[2].name);
  });
  
  it('displays moderator indicator for user', () => {
    comp.users = [testUsers[0]];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.glyphicon-star-empty'));    
    expect(de).not.toBeNull();
  });
  
  it('displays voting moderator indicator for user', () => {
    comp.users = [testUsers[1]];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.glyphicon-star'));    
    expect(de).not.toBeNull();
  });
  
  it('displays voter indicator for user', () => {
    comp.users = [testUsers[2]];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.glyphicon-user'));    
    expect(de).not.toBeNull();
  });
  
  it('displays observer indicator for user', () => {
    comp.users = [testUsers[3]];
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.glyphicon-eye-open'));    
    expect(de).not.toBeNull();
  });

  describe('when state is VoteInProgress', () => { 

    beforeEach( () => {
      comp.state = SessionState.VoteInProgress;
    });

    it('should have voted marker for voter', () => {
      comp.users = [testUsers[2]];
      comp.voted = [testUsers[2].id]; 
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.voted'));    
      expect(de).not.toBeNull();
    });

    it('should have no-vote marker for observers', () => {
      comp.users = [testUsers[3]];
      comp.voted = [testUsers[2].id]; 
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('.no-vote'));    
      expect(de).not.toBeNull();
    });

  }); 
  
  describe('when state is not VoteInProgress', () => { 

    beforeEach( () => {
      comp.state = SessionState.PreVoteOptions;
    });

    it('should not show vote status', () => {
      comp.users = [testUsers[3], testUsers[2]];
      comp.voted = [testUsers[2].id]; 
      fixture.detectChanges();
      
      de = fixture.debugElement.query(By.css('.voted'));    
      expect(de).toBeNull();
      
      de = fixture.debugElement.query(By.css('.no-vote'));    
      expect(de).toBeNull();
    });

  }); 
});
