import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartContainerComponent } from './line-chart-container.component';

describe('LineChartContainerComponent', () => {
  let component: LineChartContainerComponent;
  let fixture: ComponentFixture<LineChartContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartContainerComponent]
    });
    fixture = TestBed.createComponent(LineChartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
