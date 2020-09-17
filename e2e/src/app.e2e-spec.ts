import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
 // browser.ignoreSynchronisation = true

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to base url',()=>{
    page.navigateTo();
  })

  it('should check for header',()=>{
   page.navigateTo();
   expect(page.isToolPresent()).toBeTruthy();

  });

  it('Toggle button should be available',()=>
  {
    expect(page.isToggleButton()).toBeTruthy();
  })

  it('should routed to login initially',()=>{
   expect( page.getMyCurrentUrl()).toContain('login');
   browser.sleep(3000);
  });

  it('Should have button called submit',()=>{
    expect(page.isSubmitContent()).toBeTruthy();
  });

  it('textboxes should contain null values initially',()=>
  {

    let initialobj=["",""];
    expect(page.getLoginDefault()).toEqual(initialobj);
  });

//   it('initial values for login',()=>{
//     let currentval=["admin","password"];
// //    page.setMockValue();
//   expect(page.getLoginDefault()).toEqual(currentval);
//   browser.sleep(4000);    
//   });  

  it('should login to dashboard',()=>{

    // let uname=element(by.name('txtname'));
    // expect(uname).toBeTruthy();

    let elements=element.all(by.css('input'));
    elements.get(0).sendKeys('admin');
    elements.get(1).sendKeys('password');
  //  page.setEmptyValues();
  //   browser.sleep(4000);
  //  page.setMockValue();
    let btn=page.getSubmitButton();
     btn.click();
     browser.sleep(3000);
     expect(page.getMyCurrentUrl()).toContain('dashbrd/view/grid');
     browser.sleep(5000);
  });

it('check in dashboard news taker is available with Take Note button',()=>
{
expect(page.isTakeNoteButtonAvilable()).toBeTruthy();
browser.sleep(2000);
});


it('check element',()=>{
expect(page.getTitle()).toBeTruthy();
browser.sleep(1000);
});

 it('adding note',()=>
 {
 
 
 expect(page.getId()).toBeTruthy();
 expect(page.getDescri()).toBeTruthy();

  expect(page.getTitle()).toBeTruthy();
  
  let exppanel=page.getPanelObj();

  exppanel.click();

  
  page.addNoteValues();

  let notetakebutton=page.isTakeNoteButtonAvilable();
   notetakebutton.click();

  browser.sleep(3000);

  expect(page.getLastNoteTitle()).toEqual("August");

  browser.sleep(3000);
 });
  
// it('checking ',()=>{

//   let uname=element(by.name('txtname'));
//     expect(uname).toBeTruthy();

//     let elements=element.all(by.css('input'));
//     elements.get(0).sendKeys('admin');
//     elements.get(1).sendKeys('password');

// });

   

 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
