import {Component} from 'angular2/core';
import {NgFor} from "angular2/common";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Observable} from 'rxjs';

import {CandidateItem} from './candidateItem.component';
import {CandidateService} from './candidateService';
import {Candidate} from './CandidateInterface';


@Component({
  directives: [NgFor],
  providers: [CandidateService],
  selector: 'CandidateDetail',
  template: `
    <div>
      <div class="row">
        You are in the candidate detail view view;
      </div>
    </div>
  `
})
export class CandidateDetail {

  items:Observable<Candidate[]> = new Observable();

  constructor(service:CandidateService) {
    this.items = service.fetchCandidates();
  }
}