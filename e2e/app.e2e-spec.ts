import { NyseFrontendAngular2Page } from './app.po';

describe('nyse-frontend-angular2 App', () => {
  let page: NyseFrontendAngular2Page;

  beforeEach(() => {
    page = new NyseFrontendAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
