import { browser, by, element, ElementFinder, promise } from 'protractor';

export class AppPage {

  navigateTo(){
 
    return browser.get("/");
  }

  // getTitleText(): Promise<string> {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }

getMattool() : ElementFinder
{
  return element(by.css('mat-toolbar'));

}

isToolPresent() : promise.Promise<boolean>
{
  return this.getMattool().isPresent();
}

}
