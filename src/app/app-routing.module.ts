import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CountryComponent } from './pages/country/country.component';

// Provide all the routes available in the app
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'country/:id',
    component: CountryComponent,
  },
  {
    path: '**', // wildcard
    component: NotFoundComponent,
  },
];

// Provide the router for the whole app
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
