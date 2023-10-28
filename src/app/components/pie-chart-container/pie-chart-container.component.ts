import { Component, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ExtendedPieChartData,
  PieChartData,
} from 'src/app/core/models/PieChartData.model';
import { faAward } from '@fortawesome/free-solid-svg-icons';

@Component({
  // Display pie chart from ngx-charts library, chart shows a list of countries with their medals count earn during some of the last olympics.
  selector: 'app-pie-chart-container',
  templateUrl: './pie-chart-container.component.html',
  styleUrls: ['./pie-chart-container.component.scss'],
})
export class PieChartContainerComponent implements AfterViewInit {
  @Input() data!: PieChartData[]; // Data inputted by parent component.

  constructor(
    // Constructor provide to this instance the angular router for user redirection
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    // This code will be executed after component's view is rendered, here modify labels size in dom
    // Had to manipulate the dom this way due to ngx-charts label's style behaviour. Css direct styling not working
    if (window.innerWidth > 450) {
      // This code will apply if user's window size is tablet or desktop to not have to big labels on small screens
      const labels: NodeListOf<HTMLElement> =
        document.querySelectorAll('.pie-label'); // Target all pie chart labels
      labels.forEach((label) => {
        label.style.fontSize = '22px'; // Modify size of each label
      });
    }
  }

  // pie chart options for html template
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  trimLabels: boolean = false;
  faAward = faAward; // fontAwesome icon is used in custom tooltip

  onSelect(data: ExtendedPieChartData): void {
    // Callback fonction will be call when user click on a country in chart to redirect him on country page with right country id
    this.router.navigateByUrl(`country/${data.extra.id}`);
  }
}
