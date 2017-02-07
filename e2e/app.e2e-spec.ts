import { FirebaseAngularAuthStarterPage } from './app.po';

describe('firebase-angular-auth-starter App', function() {
  let page: FirebaseAngularAuthStarterPage;

  beforeEach(() => {
    page = new FirebaseAngularAuthStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
