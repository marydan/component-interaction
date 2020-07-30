import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsgridviewComponent } from './newsgridview.component';

describe('NewsgridviewComponent', () => {
  let component: NewsgridviewComponent;
  let fixture: ComponentFixture<NewsgridviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsgridviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsgridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
