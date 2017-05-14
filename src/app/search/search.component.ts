import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  price: number;
  symbol: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(ticker: string) {



    this.searchService.getData(ticker).then(response => {

      this.price = response.price;
      this.symbol = response.ticker;

    });

  }

}
