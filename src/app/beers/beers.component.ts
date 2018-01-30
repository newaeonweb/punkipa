import { Component, OnInit } from '@angular/core';
import { BeersService } from './services/beers.service';
import { BeerInterface } from './models/beer.interface';

/**
 * The main component
 */
@Component({
  moduleId: module.id,
  selector: 'app-games',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})

export class BeersComponent implements OnInit {
  public beersList: BeerInterface[];
  public searchText: string;
  public selectedFilter: string;
  public requestError: any;
  public isLoading = false;
  public deviceWidth: number;

  constructor(private beersService: BeersService) { }

  ngOnInit() {
    this.getBeers();
  }

  /**
   * Filter by property
   */

  public filterProperty (property: string): void {
    this.selectedFilter = property;
  }

  /**
   * Remove Filter reset list to default state
   */

  public removeFilter (): void {
    this.selectedFilter = undefined;
  }

  public viewDetail (item: any) {
    window.localStorage.setItem('game', JSON.stringify({item}));
  }

  /**
   * Get beers, page = 1, per_page= 10
   */

  public getBeers () {
    this.isLoading = true;
    return this.beersService.get(1, 20).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  /**
   * Handling response
   */

  protected handleResponse (response: any) {
    this.isLoading = false;
    this.requestError = null;
    return this.beersList = response;
  }

  /**
   * Handling error
   */

  protected handleError (error: any) {
    this.isLoading = false;
    return this.requestError = error;
  }
}
