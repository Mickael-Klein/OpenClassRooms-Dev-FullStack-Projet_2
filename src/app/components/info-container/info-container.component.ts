import { Component, Input } from '@angular/core';
import { InfoContainer } from 'src/app/core/models/InfoContainer.model';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss'],
})
export class InfoContainerComponent {
  @Input() data!: InfoContainer;
}
