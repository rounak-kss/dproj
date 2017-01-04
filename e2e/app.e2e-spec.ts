import { DprojPage } from './app.po';

describe('dproj App', function() {
  let page: DprojPage;

  beforeEach(() => {
    page = new DprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
