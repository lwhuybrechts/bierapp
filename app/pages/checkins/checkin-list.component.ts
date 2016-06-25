import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';

import { CheckinsService } from '../../services/checkinsservice';
import { CheckinDirective } from '../../directives/checkin.directive';
import { BeersService } from '../../services/beersservice';
import { BeerDirective } from '../../directives/beer.directive';
import { DateFormatter } from '../../pipes/dateformatter';

@Component({
    templateUrl: 'app/pages/checkins/checkin-list.html',
    directives: [RouterLink],
    pipes: [DateFormatter],
})
export class CheckinListComponent {
    public checkins: CheckinDirective[] = [];

    constructor(checkinsService: CheckinsService, router: Router, beersService: BeersService) {
        checkinsService.getCheckins().subscribe(checkins => {
            // Check if it is an array
            if (!checkins || Object.prototype.toString.call(checkins) !== '[object Array]')
                return;

            beersService.getBeersByIds(checkins.map(checkin => checkin.beerId)).subscribe(beers => {
                // Check if it is an array
                if (!beers || Object.prototype.toString.call(beers) !== '[object Array]')
                    return;

                checkins.forEach(checkin => {
                    var checkinDirective = new CheckinDirective(checkin, router);
                    var beer = beers.find(beer => beer._id === checkin.beerId);
                    if (beer) {
                        var beerDirective = new BeerDirective(beersService, beer, router);
                        checkinDirective.beer = beerDirective;
                    } 
                    this.checkins.push(checkinDirective);
                });
            });
        });
    }
}