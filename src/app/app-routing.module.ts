import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BeersComponent } from './beers/beers.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'beers', pathMatch: 'full' },
  { path: 'beers', component: BeersComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
