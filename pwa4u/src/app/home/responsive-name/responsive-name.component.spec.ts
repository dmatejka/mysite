import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveNameComponent } from './responsive-name.component';

describe('ResponsiveNameComponent', () => {
  let component: ResponsiveNameComponent;
  let fixture: ComponentFixture<ResponsiveNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
