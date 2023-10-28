import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-home-arrow',
  templateUrl: './back-home-arrow.component.html',
  styleUrls: ['./back-home-arrow.component.scss'],
})
export class BackHomeArrowComponent {
  // Display arrow left icon wich is in a router nav link to homePage, display on country page.
  faArrowLeft = faArrowLeft;
}
