import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { PortfolioAddComponent } from './portfolio/portfolio-add/portfolio-add.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, children: [
    {path: 'add', component: PortfolioAddComponent},
    {path: 'list', component: PortfolioListComponent},
  ] },
  { path: 'search', component: SearchComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PortfolioComponent,
    PortfolioAddComponent,
    PortfolioListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
