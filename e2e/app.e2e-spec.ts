import { ProgrammingPage } from './app.po';

describe('programming App', function() {
  let page: ProgrammingPage;

  beforeEach(() => {
    page = new ProgrammingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
