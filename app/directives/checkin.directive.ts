import { Directive, EventEmitter } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Checkin } from '../models/checkin';

import { BeerDirective } from '../directives/beer.directive';

@Directive({
})
export class CheckinDirective extends Checkin {
    private _router: Router;

    public beer: BeerDirective;
    
    constructor(checkin: Checkin, router: Router, beerDirective?: BeerDirective) {
        super(checkin);

        this._router = router;
        this.beer = beerDirective;
    }
}