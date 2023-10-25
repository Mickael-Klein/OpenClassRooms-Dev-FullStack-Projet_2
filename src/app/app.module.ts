import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleContainerComponent } from './components/title-container/title-container.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { PieChartContainerComponent } from './components/pie-chart-container/pie-chart-container.component';
import { CountryComponent } from './pages/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoaderComponent,
    HeaderComponent,
    TitleContainerComponent,
    InfoContainerComponent,
    PieChartContainerComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
