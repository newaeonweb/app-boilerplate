import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GamesService } from './games/games.service';
import { AppRoutingModule } from './app-routing.module';
import { SearchPipe } from './games/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
