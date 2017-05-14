import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PortfolioService {

  constructor(private http: Http) { }


  deleteRecord(id: number) {


    return this.http.delete('http://localhost:8080/portfolio?id=' + id).toPromise();

  }

}
