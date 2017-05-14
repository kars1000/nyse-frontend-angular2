import { TestBed, inject } from '@angular/core/testing';

import { PortfolioAddService } from './portfolio-add.service';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

describe('PortfolioAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PortfolioAddService]
    });
  });

  it('should ...', inject([PortfolioAddService], (service: PortfolioAddService) => {
    expect(service).toBeTruthy();
  }));
});
