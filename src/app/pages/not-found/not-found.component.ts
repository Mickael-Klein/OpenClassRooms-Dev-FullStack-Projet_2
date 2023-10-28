import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {} // Display an error message to user when requested element doesn't exist, has a back-home button to let user go back to index page
