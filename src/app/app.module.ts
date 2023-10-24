import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleContainerComponent } from './components/title-container/title-container.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, LoaderComponent, HeaderComponent, TitleContainerComponent, InfoContainerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
