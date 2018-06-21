import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BepageComponent } from './bepage.component';

describe('BepageComponent', () => {
  let component: BepageComponent;
  let fixture: ComponentFixture<BepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
