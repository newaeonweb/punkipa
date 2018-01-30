import { FilterPipe } from './../pipes/filter.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { BeersService } from './beers.service';
import { HttpClientModule } from '@angular/common/http';

describe('BeersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [BeersService],
      declarations: []
    });
  });

  fit('should be created', inject([BeersService], (service: BeersService) => {
    expect(service).toBeTruthy();
  }));
});
