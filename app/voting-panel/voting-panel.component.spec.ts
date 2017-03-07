import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { VotingPanelComponent } from './voting-panel.component';
import { Point } from '../models/point';

describe('VotingPanelComponent (inline template)', () => {

  let comp:    VotingPanelComponent;
  let fixture: ComponentFixture<VotingPanelComponent>;
  let selected: DebugElement;
  let el:      HTMLElement;

  const testPoints : Point[] = [
   {id: 1, value: 1, label: "1"},
   {id: 2, value: 2, label: "2"},
   {id: 3, value: 3, label: "3"}    
  ]; 

  beforeEach( async( () => {
    TestBed.configureTestingModule({
      declarations: [ VotingPanelComponent ], // declare the test component
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(VotingPanelComponent); 
      comp = fixture.componentInstance; // VotingPanelComponent test instance
    });
  }));
  
  it('displays label of each point passed in', () => {
    comp.points = testPoints;
    fixture.detectChanges();
    el = fixture.nativeElement;
    expect(el.textContent).toContain(testPoints[0].label);
    expect(el.textContent).toContain(testPoints[1].label);
    expect(el.textContent).toContain(testPoints[2].label);
  });

  it('should emit vote event', (done) => {
    comp.points = testPoints;
    fixture.detectChanges();

    comp.vote.subscribe( (p : Point) => {
      expect(p).toEqual(testPoints[1]);
      done();
    });

    comp.select(testPoints[1]);
  });
  
  it('should highlight point selected', () => {
    selected = fixture.debugElement.query(By.css('.selected'));
    expect(selected).toBeNull();
    
    comp.points = testPoints;
    fixture.detectChanges();
    comp.select(testPoints[1]);
    fixture.detectChanges();
    
    selected = fixture.debugElement.query(By.css('.selected'));
    expect(selected).not.toBeNull();
  });
  
  it('should unhighlight point when refresh selected', () => {
    comp.points = testPoints;
    fixture.detectChanges();
    comp.select(testPoints[1]);
    fixture.detectChanges();
    
    selected = fixture.debugElement.query(By.css('.selected'));
    expect(selected).not.toBeNull();

    comp.select(null);
    fixture.detectChanges();

    selected = fixture.debugElement.query(By.css('.selected'));
    expect(selected).toBeNull();
  });
  
});
