import { Directive, EventEmitter } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { BeersService } from '../services/beersservice';
import { Beer } from '../models/beer';

const IMAGE_FOLDER = "/app/images";

@Directive({
    outputs: ['deleted']
})
export class BeerDirective extends Beer {
    private _beersService: BeersService;
    private _router: Router;
    
    private _image = "";
    public get image() {
        return `${IMAGE_FOLDER}/${this._id}.jpg`;
    }

    public deleted: EventEmitter<string> = new EventEmitter<string>();

    constructor(beersService: BeersService, beer: Beer, router: Router) {
        super(beer);

        this._beersService = beersService;
        this._router = router;
    }

    public navigate() {
        this._router.navigate(['Beer', { id: this._id }]);
    }

    public delete(event: Event) {
        event.stopPropagation();

        if (confirm(`Weet je zeker dat je "${this.name}" wil weggooien?`)) {
            this._beersService.deleteBeer(this._id).subscribe(beers => {
                this.deleted.next(this._id);
            });
        }
    }
}