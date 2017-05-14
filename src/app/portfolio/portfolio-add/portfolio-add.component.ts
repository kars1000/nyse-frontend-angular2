import { Component, OnInit } from '@angular/core';
import {PortfolioAddService} from './portfolio-add.service';

@Component({
  selector: 'app-portfolio-add',
  templateUrl: './portfolio-add.component.html',
  styleUrls: ['./portfolio-add.component.css'],
  providers: [PortfolioAddService]
})
export class PortfolioAddComponent implements OnInit {


  constructor(private portfolioAddService: PortfolioAddService) { }

  ngOnInit() {
  }

  submit(val) {


    const data = {
      numberOfSharesOwned : val.shares,
      companyName : val.company,
      symbol : val.symbol
    };


    this.portfolioAddService.addPortfoilioData(data).then((response) => {

      const a = response.json();



      if (a === true) {
        alert('Data Added');
      } else {
        alert('You have exceeded the maximum number of records allowed');
      }

    });





  }

}
