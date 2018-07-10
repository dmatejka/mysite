import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivePictureComponent } from './responsive-picture.component';

describe('ResponsivePictureComponent', () => {
  let component: ResponsivePictureComponent;
  let fixture: ComponentFixture<ResponsivePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
