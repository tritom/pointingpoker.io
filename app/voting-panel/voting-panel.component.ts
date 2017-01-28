import { Component, Input } from '@angular/core';
import { Point } from '../models/point';

@Component({
    selector: 'voting-panel',
    template: `
        <div class="votingPanel"> 
          <div *ngFor="let point of pointScheme" class="point">
            <span>{{point.label}}</span>
          </div>
        </div>
    `,
    styleUrls:['app/voting-panel/voting-panel.component.css']
})
export class VotingPanelComponent { 
  @Input() pointScheme : Point[];
}

