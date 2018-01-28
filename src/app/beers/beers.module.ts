import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

// containers
import {BeersComponent } from './beers.component';

// components

// services
import { BeersService } from './services/beers.service';

// pipes
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BeersComponent,
    SearchPipe,
    FilterPipe
  ],
  providers: [
    BeersService
  ],
  exports: [
    BeersComponent
  ]
})
export class BeersModule {}

