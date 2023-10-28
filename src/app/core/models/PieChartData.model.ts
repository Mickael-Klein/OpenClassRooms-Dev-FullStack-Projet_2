export class PieChartData {
  // Model of data to pass as "result" in app-pie-chart-container in pie-chart (ngx-charts)
  constructor(
    public name: string,
    public value: number,
    public extra: { id: number }
  ) {}
}

export class ExtendedPieChartData extends PieChartData {
  // model of data received on click event on an element of the pie-chart
  label: string;
  constructor(
    name: string,
    value: number,
    extra: { id: number },
    label: string
  ) {
    super(name, value, extra);
    this.label = label;
  }
}
