import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Point } from '../models/point';

@Component({
    selector: 'voting-panel',
    template: `
        <div class="votingPanel"> 
          <div *ngFor="let point of points" class="point" (click) = "select(point)" 
                [ngClass]="{selected : point == selectedPoint}">
            <span class="point-label">{{point.label}}</span>
          </div>
          <div class="point" (click) = "select(null)" alt="Clear Vote">
            <span class="glyphicon glyphicon-repeat"></span>
          </div>
        </div>
    `,
    styleUrls:['app/voting-panel/voting-panel.component.css']
})

export class VotingPanelComponent { 
  @Input() points: Point[];
  @Output() vote = new EventEmitter();
  private selectedPoint: Point = null;
  select(point: Point) {
    this.selectedPoint = point;
    this.vote.emit(point);
  }
}

