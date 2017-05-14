import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {

 const spy = jasmine.createSpyObj('searchService', ['getData']);

  const component = new SearchComponent(spy);

  it('should create', () => {

    expect(component).toBeTruthy();


  });



});
