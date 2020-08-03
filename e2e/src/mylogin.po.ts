import { browser, by, element, ElementFinder, promise } from 'protractor';

export class LoginPage {

  navigateToLogin()
  {
     return browser.get("/");
  }

  getUserName() : ElementFinder
  {
      const unameobj=element(by.name('txtname'));
      return unameobj;
  }
  getPassword() : ElementFinder
  {
      const passobj=element(by.name('txtpass'));
      return passobj;
  }
  isNameAvailable() : promise.Promise<boolean>
  {
      return this.getUserName().isPresent();
  }
  isPasswordAvailable() : promise.Promise<boolean>
  {
      return this.getPassword().isPresent();
  }

}