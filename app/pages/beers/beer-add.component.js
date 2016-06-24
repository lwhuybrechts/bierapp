"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var beersservice_1 = require('../../services/beersservice');
var beer_1 = require('../../models/beer');
var BeerAddComponent = (function () {
    function BeerAddComponent(beersService, router, routeParams) {
        this.beer = new beer_1.Beer({
            _id: 0,
            name: "",
            brewery: "",
            style: "",
            substyle: ""
        });
        this._beersService = beersService;
        this._router = router;
    }
    BeerAddComponent.prototype.addBeer = function () {
        var _this = this;
        this._beersService.createBeer(this.beer).subscribe(function (beers) {
            _this._router.navigate(['Beers', {}]);
        });
    };
    BeerAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/beers/beer-add.html'
        }), 
        __metadata('design:paramtypes', [beersservice_1.BeersService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], BeerAddComponent);
    return BeerAddComponent;
}());
exports.BeerAddComponent = BeerAddComponent;
//# sourceMappingURL=beer-add.component.js.map