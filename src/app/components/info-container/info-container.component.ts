import { Component, Input } from '@angular/core';
import { InfoContainer } from 'src/app/core/models/InfoContainer.model';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss'],
})
export class InfoContainerComponent {
  // Display a container wich provide a title and a count (fix number) to user
  @Input() data!: InfoContainer; // receive data by @Input from parent component wich call it
}
