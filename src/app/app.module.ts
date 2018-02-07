import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { MotosComponent } from './motos/motos.component';
import { MotosService } from './motos/motos.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchPipe } from './motos/search.pipe';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MotosComponent,
    SearchPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule
  ],
  providers: [MotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
