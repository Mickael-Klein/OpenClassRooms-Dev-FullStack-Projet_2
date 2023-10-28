export class Series {
  // Model of data for series wich are use  in line-chart (ngx-charts)
  constructor(public name: string, public value: number) {}
}

export class MinMaxSeriesValue {
  // Model of data for min and max value of values in Series
  constructor(public minValue: number, public maxValue: number) {}
}

export class LineChartData {
  // Model of data  to pass as "result" in line chart (ngx-charts)
  constructor(public name: string, public series: Series[]) {}
}

export class LineChartDatasContainer {
  // Model of data to pass to app-line-chart-container
  constructor(
    public data: LineChartData[],
    public minMaxValues: MinMaxSeriesValue
  ) {}
}
