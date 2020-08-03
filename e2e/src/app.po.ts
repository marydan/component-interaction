import { browser, by, element, ElementFinder, promise, ElementArrayFinder } from 'protractor';

export class AppPage {

  navigateTo()
  {
 
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


isToggleButton() : promise.Promise<boolean>
{
  return element(by.className('keep-c-toggle-view')).isPresent();
}




getMyCurrentUrl() : any
{
  return browser.getCurrentUrl();
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

getSubmitButton() : ElementFinder
{
  return element(by.className('btnsubmit'));
}
getLoginComponent() :ElementFinder
{
  return element(by.tagName('app-login'));
}
isSubmitContent() : ElementFinder
{
  return this.getLoginComponent().element(by.buttonText('Submit'));
}

getLoginDefault() : any
{
  let uname,pass;
  uname=this.getUserName().getAttribute('value');
  pass=this.getPassword().getAttribute('value');

  return Promise.all( [uname,pass]).then( (val) => {return val;});
}

setEmptyValues()
{

  // let logininitital={'uname':'','password':''};
  // return logininitital;
  this.getUserName().clear();
  this.getPassword().clear();

} 


setMockValue()
{

this.getUserName().sendKeys("admin");
this.getPassword().sendKeys("password");

//this.getUserName().clear();
}

getNewsTakerComponent():ElementFinder
{
  return element(by.tagName('app-newstaker'));
}

isTakeNoteButtonAvilable() : ElementFinder
{

return this.getNewsTakerComponent().element(by.buttonText('Take Note'));
}



getMockNote(): any {
  const news: any = {id :901, title: 'August', descri : 'Festival month'};
  return news;
}


getId() : ElementFinder
{
  return this.getNewsTakerComponent().element(by.name("eid"));
}

getTitle() :ElementFinder
{
  return this.getNewsTakerComponent().element(by.name('title'));
}

getDescri() : ElementFinder
{
  return this.getNewsTakerComponent().element(by.name('descri'));
}

getPanelObj() : ElementFinder
{
  return this.getNewsTakerComponent().element(by.className("clsnews"));
}

// set input fileds values with mock data
addNoteValues(): any {
  const newNote: any = this.getMockNote();
  this.getId().sendKeys(newNote.id);
  this.getTitle().sendKeys(newNote.title);
  this.getDescri().sendKeys(newNote.descri);
  
  return Object.keys(newNote).map(key => newNote[key]);
}

// get all notes
getAllNotes(): ElementArrayFinder {
  return element.all(by.css('mat-card'));
}
// get last note
getLastNote(): ElementFinder {
  return this.getAllNotes().last();
}

// get last note
getLastNoteTitle(): promise.Promise<string> {
  return this.getAllNotes().last().element(by.css('mat-card-title')).getText();
}

}







