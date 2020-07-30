import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistviewComponent } from './newslistview.component';

describe('NewslistviewComponent', () => {
  let component: NewslistviewComponent;
  let fixture: ComponentFixture<NewslistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

