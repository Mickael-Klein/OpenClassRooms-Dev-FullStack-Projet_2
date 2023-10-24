import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleContainerComponent } from './title-container.component';

describe('TitleContainerComponent', () => {
  let component: TitleContainerComponent;
  let fixture: ComponentFixture<TitleContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleContainerComponent]
    });
    fixture = TestBed.createComponent(TitleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
