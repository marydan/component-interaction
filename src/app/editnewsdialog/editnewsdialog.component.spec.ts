import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnewsdialogComponent } from './editnewsdialog.component';

describe('EditnewsdialogComponent', () => {
  let component: EditnewsdialogComponent;
  let fixture: ComponentFixture<EditnewsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnewsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnewsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
