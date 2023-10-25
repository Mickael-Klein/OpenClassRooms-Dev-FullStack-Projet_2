import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieChartData } from 'src/app/core/models/PieChartData.model';

@Component({
  selector: 'app-pie-chart-container',
  templateUrl: './pie-chart-container.component.html',
  styleUrls: ['./pie-chart-container.component.scss'],
})
export class PieChartContainerComponent implements OnInit {
  @Input() data!: PieChartData[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('data in pie component', this.data);
  }

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  onSelect(data: ExtendedPieChartData): void {
    console.log(data);
    this.router.navigateByUrl(`country/${data.extra.id}`);
  }
}

class ExtendedPieChartData extends PieChartData {
  // model of data received on click event
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
