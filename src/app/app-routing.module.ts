import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarsComponent } from './pages/cars/cars.component';
import { MotosComponent } from './pages/motos/motos.component';


const appRoutes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'motos', component: MotosComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
