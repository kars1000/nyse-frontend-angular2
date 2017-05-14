import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class SearchService {

  constructor(private http: Http) { }


  getData(ticker: string) {



    return this.http.get('http://localhost:8080/search?symbol=' + ticker).map(response => response.json()).toPromise();

  }

}
