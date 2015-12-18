import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Candidate} from "./CandidateInterface";
import {Observable} from 'rxjs';

@Injectable()
export class CandidateService {
  constructor(private http:Http) {}

  fetchCandidates():Observable<Candidate[]> {
    return this.http.get('http://localhost:8002/candidates')
      .map(res => res.json())
  }
}