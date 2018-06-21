import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FepageComponent } from './fepage.component';

describe('FepageComponent', () => {
  let component: FepageComponent;
  let fixture: ComponentFixture<FepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
