import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-container',
  templateUrl: './title-container.component.html',
  styleUrls: ['./title-container.component.scss'],
})
export class TitleContainerComponent {
  // Displays a container wich contains a title, uses as page title
  @Input() title!: string; // Allow to pass data from parent component and use it, in this case in html template
}
