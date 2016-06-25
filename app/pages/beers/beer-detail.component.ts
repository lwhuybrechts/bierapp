import { Component } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { BeersService } from '../../services/beersservice';
import { BeerDirective } from '../../directives/beer.directive';
import { BeerStyleFormatter } from '../../pipes/beerstyleformatter';

import { CheckinsService } from '../../services/checkinsservice';
import { CheckinDirective } from '../../directives/checkin.directive';
import { AverageRatingFormatter } from '../../pipes/averageratingformatter';

@Component({
    templateUrl: 'app/pages/beers/beer-detail.html',
    pipes: [BeerStyleFormatter, AverageRatingFormatter]
})
export class BeerDetailComponent {
    public beer: BeerDirective;
    public checkins: CheckinDirective[] = [];

    constructor(beersService: BeersService, checkinsService: CheckinsService, router: Router, routeParams: RouteParams) {
        beersService.getBeerById(routeParams.params['id']).subscribe(beer => {
            this.beer = new BeerDirective(beersService, beer, router);
        });

        checkinsService.getCheckinsByBeerId(routeParams.params['id']).subscribe(checkins => {
            checkins.forEach(checkin => {
                this.checkins.push(new CheckinDirective(checkin, router));
            });
        });
    }
}