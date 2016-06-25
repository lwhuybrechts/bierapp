import { Component } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { CheckinsService } from '../../services/checkinsservice';
import { BeersService } from '../../services/beersservice';

import { Checkin } from '../../models/checkin';
import { BeerDirective } from '../../directives/beer.directive';

@Component({
    templateUrl: 'app/pages/checkins/checkin-add.html'
})
export class CheckinAddComponent {
    private _checkinsService: CheckinsService;
    private _router: Router;

    public beers: BeerDirective[] = [];
    public checkin = new Checkin({
        _id: 0,
        beerId: 0,
        comment: "",
        rating: 0
    });

    constructor(checkinsService: CheckinsService, beersService: BeersService, router: Router, routeParams: RouteParams) {
        this._checkinsService = checkinsService;
        this._router = router;

        beersService.getBeers().subscribe(beers => {
            // Check if it is an array
            if (!beers || Object.prototype.toString.call(beers) !== '[object Array]')
                return;

            beers.forEach(beer => {
                this.beers.push(new BeerDirective(beersService, beer, router));
            });
        });
    }

    public addCheckin() {
        this._checkinsService.createCheckin(this.checkin).subscribe(checkins => {
            this._router.navigate(['CheckinList', { }]);
        });
    }
}