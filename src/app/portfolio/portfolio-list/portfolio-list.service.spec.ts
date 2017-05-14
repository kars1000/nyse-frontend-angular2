import { TestBed, inject } from '@angular/core/testing';

import { PortfolioListService } from './portfolio-list.service';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

describe('PortfolioListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [PortfolioListService]
    });
  });

  it('should ...', inject([PortfolioListService], (service: PortfolioListService) => {
    expect(service).toBeTruthy();
  }));
});
