/// <reference path="../../typings/tsd.d.ts" />

import {CandidateService} from '../../app/candidates/candidateService';
import {Candidate} from '../../app/candidates/CandidateInterface';

import chai = require('chai');
import chaiSubset = require('chai-subset');

import {Http, BaseRequestOptions, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide, Injector} from 'angular2/core';
import Rx = require('rxjs');
window['rx'] = Rx;

const fakeDataGenerator = require('../../fakeData');

chai.use(chaiSubset);
const expect = chai.expect;


describe('candidateService', () => {

  var injector:any;
  var candidateService:CandidateService;
  var fakeData:Candidate[];

  beforeEach(() => {
    injector = Injector.resolveAndCreate([
      MockBackend,
      BaseRequestOptions,
      provide(Http, {
        useFactory: (backend, options) => new Http(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }),
      CandidateService
    ]);

    fakeData = fakeDataGenerator(5).candidates;
    candidateService = injector.get(CandidateService);
  });

  it('should have a fetchCandidates method', () => {
    expect(candidateService.fetchCandidates).to.be.ok;
  });

  describe('#fetchCandidates', () => {

    it('should fetch a list of items', (done) => {
      var backend = injector.get(MockBackend);
      backend.connections.subscribe(c => c.mockRespond(new Response(new ResponseOptions({body: fakeData}))));
      candidateService.fetchCandidates()
        .subscribe((res) => {
          expect(res).to.have.length(fakeData.length);
          expect(res).to.eql(fakeData);

          done();
        });

    });
  });


});