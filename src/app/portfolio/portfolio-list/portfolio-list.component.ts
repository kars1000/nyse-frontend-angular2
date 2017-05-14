import { Component, OnInit } from '@angular/core';
import {PortfolioListService} from './portfolio-list.service';
import {PortfolioService} from '../portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
  providers: [PortfolioListService, PortfolioService]
})
export class PortfolioListComponent implements OnInit {


  portfolioData: Object[] = [];


  constructor(private portfolioListService: PortfolioListService, private portfolioService: PortfolioService) {}



  ngOnInit() {

   this.portfolioListService.getData().then((response) => {
     this.portfolioData = response;
   });

  }


  deleteRecord(id: number, index: number) {

    this.portfolioService.deleteRecord(id).then((response) => {
      this.portfolioData.splice(index, 1);
    });


  }

}
