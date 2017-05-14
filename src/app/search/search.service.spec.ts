import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';


describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        SearchService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should karim12345565555...', inject([SearchService, XHRBackend], (searchService, mockBackend) =>  {
    expect(searchService).toBeTruthy();
  }));
});
