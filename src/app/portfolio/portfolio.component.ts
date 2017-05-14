import { Component, OnInit } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { PortfolioAddComponent } from './portfolio-add/portfolio-add.component';

const routes: Routes = [
  { path: 'add', component: PortfolioAddComponent }
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
