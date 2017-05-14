import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAddComponent } from './portfolio-add.component';


import { FormsModule } from '@angular/forms';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

describe('PortfolioAddComponent', () => {
  let component: PortfolioAddComponent;
  let fixture: ComponentFixture<PortfolioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [FormsModule, HttpModule],
      declarations: [ PortfolioAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
