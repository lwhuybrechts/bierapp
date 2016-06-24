import { Component } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { BeersService } from '../../services/beersservice';
import { BeerDirective } from '../../directives/beer.directive';
import { BeerStyleFormatter } from '../../pipes/beerstyleformatter';

@Component({
    templateUrl: 'app/pages/beers/beer-detail.html',
    pipes: [BeerStyleFormatter]
})
export class BeerDetailComponent {
    public beer: BeerDirective;

    constructor(beersService: BeersService, router: Router, routeParams: RouteParams) {
        beersService.getBeerById(routeParams.params['id']).subscribe(beer => {
            this.beer = new BeerDirective(beersService, beer, router);
        });
    }
}