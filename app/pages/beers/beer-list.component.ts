import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';

import { BeersService } from '../../services/beersservice';
import { BeerDirective } from '../../directives/beer.directive';
import { BeerStyleFormatter } from '../../pipes/beerstyleformatter';

@Component({
    templateUrl: 'app/pages/beers/beer-list.html',
    directives: [RouterLink],
    pipes: [BeerStyleFormatter],
})
export class BeerListComponent {
    public beers: BeerDirective[] = [];

    constructor(beersService: BeersService, router: Router) {
        beersService.getBeers().subscribe(beers => {
            // Check if it is an array
            if (!beers || Object.prototype.toString.call(beers) !== '[object Array]')
                return;

            beers.forEach(beer => {
                var beerPartial = new BeerDirective(beersService, beer, router);
                beerPartial.deleted.subscribe(id => {
                    this.removeBeerFromList(id);
                });
                this.beers.push(beerPartial);
            });
        });
    }

    private removeBeerFromList(id: string) {
        this.beers.forEach(beer => {
            if (beer._id === id) {
                var index = this.beers.indexOf(beer);
                this.beers.splice(index, 1);
            }
        });
    }
}