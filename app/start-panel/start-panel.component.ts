import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'start-panel',
    template: `
        <div class="container"> 
          <div class="row  align-items-center">
            <div class="col col-xs-12 col-md-6">
              <div class="start-column">
                <input #existingSession (keyup.enter)="joinSession(existingSession.value)"
                  placeholder="Poker Session Id" i18n-placeholder="Poker Session Id">
                 <div class="join-button" (click)="joinSession(existingSession.value)">Join</div>
              </div>
            </div>
            <div class="col col-xs-12 col-md-6">
              <div class="start-column">
                 <div class="create-button">Create New Session</div>
              </div>
            </div>
          </div>
        </div>
    `,
    styleUrls:['app/start-panel/start-panel.component.css']
})

export class StartPanelComponent { 
  @Output() join = new EventEmitter();

  joinSession(id:String) {
    this.join.emit(id);
  } 
}

