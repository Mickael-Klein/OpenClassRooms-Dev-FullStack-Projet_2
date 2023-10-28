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
import { LineChartContainerComponent } from './components/line-chart-container/line-chart-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackHomeArrowComponent } from './components/back-home-arrow/back-home-arrow.component';

// All imports and Modules/Components declarations are made here
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
    LineChartContainerComponent,
    BackHomeArrowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
