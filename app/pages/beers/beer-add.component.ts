import { Component } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { BeersService } from '../../services/beersservice';
import { Beer } from '../../models/beer';

@Component({
    templateUrl: 'app/pages/beers/beer-add.html'
})
export class BeerAddComponent {
    private _beersService: BeersService;
    private _router: Router;

    public beer = new Beer({
        _id: 0,
        name: "",
        brewery: "",
        style: "",
        substyle: ""
    });

    constructor(beersService: BeersService, router: Router, routeParams: RouteParams) {
        this._beersService = beersService;
        this._router = router;
    }

    public addBeer() {
        this._beersService.createBeer(this.beer).subscribe(beers => {
            this._router.navigate(['BeerList', { }]);
        });
    }
}