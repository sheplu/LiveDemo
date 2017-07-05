import { GithubfetchPage } from './app.po';

describe('githubfetch App', () => {
  let page: GithubfetchPage;

  beforeEach(() => {
    page = new GithubfetchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
