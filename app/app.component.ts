import {Component} from 'angular2/core';
import {CandidateList} from './candidates/candidateList.page.ts';
import {SecondPage} from './components/secondPage.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CandidateDetail} from "./candidates/candidateDetail.page.ts";


@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'application',
  template: `
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">InRhythm - Vivace</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a [routerLink]="['CandidateList']">Candidate List</a></li>
            <li><a [routerLink]="['SecondPage']">Second Route</a></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
@RouteConfig([
  {path:'/candidates', name: 'CandidateList', component: CandidateList, useAsDefault:true},
  {path:'/candidates/:id', name: 'CandidateDetails', component: CandidateDetail},
  {path:'/second', name: 'SecondPage', component: SecondPage}
])
export class AppComponent {

}