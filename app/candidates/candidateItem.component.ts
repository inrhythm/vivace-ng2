import {Component, Input} from 'angular2/core';
import {Candidate} from './CandidateInterface';

import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'CandidateItem',
  directives: [ROUTER_DIRECTIVES],
  template: `
        <div class="col s3">
          <div class="card medium">
            <div class="card-image">
              <a [routerLink]="['CandidateDetails', {id: item.id}]">
                <img [src]="item.avatar">
                <span class="card-title ir-orange-text">{{item.firstName}} {{item.lastName}}</span>
              </a>
            </div>
            <div class="card-content">
              <p>{{item.shortDescription}}</p>
            </div>
          </div>
        </div>

  `
})
export class CandidateItem {
  @Input() item:Candidate;
}