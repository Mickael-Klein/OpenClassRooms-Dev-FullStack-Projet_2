import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHomeArrowComponent } from './back-home-arrow.component';

describe('BackHomeArrowComponent', () => {
  let component: BackHomeArrowComponent;
  let fixture: ComponentFixture<BackHomeArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackHomeArrowComponent]
    });
    fixture = TestBed.createComponent(BackHomeArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
