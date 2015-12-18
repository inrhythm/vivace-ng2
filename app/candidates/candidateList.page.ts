import {Component} from 'angular2/core';
import {NgFor} from "angular2/common";
import {RouteConfig} from 'angular2/router';
import {Observable} from 'rxjs';

import {CandidateItem} from './candidateItem.component';
import {CandidateDetail} from './candidateDetail.page';
import {CandidateService} from './candidateService';
import {Candidate} from './CandidateInterface';


@Component({
  directives: [CandidateItem, NgFor],
  providers: [CandidateService],
  selector: 'CandidateList',
  template: `
      <div class="row">
        <CandidateItem *ngFor="#item of items | async" [item]="item"></CandidateItem>
      </div>
  `
})
export class CandidateList {

  items:Observable<Candidate[]> = new Observable();

  constructor(service:CandidateService) {
    this.items = service.fetchCandidates();
  }
}