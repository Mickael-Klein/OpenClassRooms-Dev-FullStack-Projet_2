import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {
  LineChartData,
  LineChartDatasContainer,
  Series,
} from 'src/app/core/models/LineChartData.model';

@Component({
  // Display a line chart from ngx-charts library, wich provide dates and medals count to user, datas are provided by parent component
  selector: 'app-line-chart-container',
  templateUrl: './line-chart-container.component.html',
  styleUrls: ['./line-chart-container.component.scss'],
})
export class LineChartContainerComponent implements OnInit, AfterViewInit {
  @Input() lineChartDatasContainer!: LineChartDatasContainer; // Input data from parent component

  // line chart options declarations
  minYScaleValue!: number;
  maxYScaleValue!: number;
  chartDataArr!: LineChartData[];
  showLabels!: boolean;
  xAxis!: boolean;
  yAxis!: boolean;
  showYAxisLabel!: boolean;
  showXAxisLabel!: boolean;
  xAxisLabel!: string;
  yAxisLabel!: string;
  animations!: boolean;
  yScaleMin!: number;
  yScaleMax!: number;

  ngOnInit(): void {
    // Code in this will be executed on initialisation of the component, here initialise datas from datas inputted by parent component
    // All datas are given in the onInit to be used in chart, if not min and max value for y scale are not used cause undefined
    this.minYScaleValue = this.lineChartDatasContainer.minMaxValues.minValue;
    this.maxYScaleValue = this.lineChartDatasContainer.minMaxValues.maxValue;
    this.chartDataArr = this.lineChartDatasContainer.data;

    // options initialised with correct values for html template
    this.showLabels = true;
    this.xAxis = true;
    this.yAxis = true;
    this.showYAxisLabel = false;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Dates';
    this.yAxisLabel = 'Medals';
    this.animations = true;
    this.yScaleMin = this.minYScaleValue;
    this.yScaleMax = this.maxYScaleValue;
  }

  ngAfterViewInit(): void {
    // Code in this will be executed after component's view is rendered, here use to modify chart text element (xLabel wich is Date) size.
    // Had to use it cause css property doesn't modify anything due to ngx-chart behaviour.
    const xLabel: HTMLElement | null = document.querySelector(
      "[ng-reflect-label='Dates']" // Target element by attribute
    );
    if (xLabel) {
      xLabel.style.fontSize = '22px'; // Modify inline style
    }
  }
}
