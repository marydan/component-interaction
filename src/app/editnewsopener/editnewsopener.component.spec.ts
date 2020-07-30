import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnewsopenerComponent } from './editnewsopener.component';

describe('EditnewsopenerComponent', () => {
  let component: EditnewsopenerComponent;
  let fixture: ComponentFixture<EditnewsopenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnewsopenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnewsopenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
