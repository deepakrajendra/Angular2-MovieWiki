import { browser, element, by } from 'protractor';

export class MovieWikiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mv-root h1')).getText();
  }
}
