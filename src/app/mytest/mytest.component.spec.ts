import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { MytestComponent } from './mytest.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TestserveService } from '../testserve.service';

fdescribe('MytestComponent', () => {
  let component: MytestComponent;
  let fixture: ComponentFixture<MytestComponent>;

  beforeEach(async(() => {

    let newsstub= {news : {id:"299","title":"Today","descri":"Thursday"}};

    TestBed.configureTestingModule({
      declarations: [ MytestComponent ],
      imports:[MatToolbarModule],
      providers : [ {provide:TestserveService,useValue:newsstub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('Should check h1',()=>{
 let h1obj=fixture.debugElement.query(By.css(".clshead"));
expect(h1obj).toBeTruthy();
   });

//    it('Should check content',()=>
//    {
// let spaobj=fixture.debugElement.query(By.css('#spa1'));
// expect(spaobj.nativeElement.textContent).toEqual("Welcome");

//    });

   it('Mat toolbar should exist',()=>
   {
     let matobj=fixture.debugElement.query(By.css("mat-toolbar"));
     expect(matobj).toBeTruthy();
   });

  it('Should used company attribute  in span',()=>
  {
  component.company="Stackroute";

 let spaobj=fixture.debugElement.query(By.css('#spa1'));

 fixture.detectChanges();

 expect(spaobj.nativeElement.textContent).toEqual('Welcome To Stackroute');
   

  });


  it("should inject service and display description",()=>{
 
    let usedcomp=fixture.debugElement.injector.get(TestserveService);

    let h3obj=fixture.debugElement.query(By.css('.clsinfo'));

    fixture.detectChanges();
    
    expect(h3obj.nativeElement.textContent).toContain("Thursday");




  });




});
