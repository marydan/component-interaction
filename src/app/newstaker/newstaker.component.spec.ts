import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstakerComponent } from './newstaker.component';

describe('NewstakerComponent', () => {
  let component: NewstakerComponent;
  let fixture: ComponentFixture<NewstakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
