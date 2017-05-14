import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PortfolioAddService {

  constructor(private http: Http) { }


  addPortfoilioData(data: object) {

    return this.http.post('http://localhost:8080/portfolio', data).toPromise();
  }

}
