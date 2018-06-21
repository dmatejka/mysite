import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpageComponent } from './slpage.component';

describe('SlpageComponent', () => {
  let component: SlpageComponent;
  let fixture: ComponentFixture<SlpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
