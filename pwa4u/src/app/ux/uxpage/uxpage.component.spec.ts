import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxpageComponent } from './uxpage.component';

describe('UxpageComponent', () => {
  let component: UxpageComponent;
  let fixture: ComponentFixture<UxpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
