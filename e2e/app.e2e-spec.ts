import { MovieWikiPage } from './app.po';

describe('movie-wiki App', function() {
  let page: MovieWikiPage;

  beforeEach(() => {
    page = new MovieWikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mv works!');
  });
});
