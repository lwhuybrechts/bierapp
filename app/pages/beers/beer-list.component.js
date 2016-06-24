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
var beer_directive_1 = require('../../directives/beer.directive');
var beerstyleformatter_1 = require('../../pipes/beerstyleformatter');
var BeerListComponent = (function () {
    function BeerListComponent(beersService, router) {
        var _this = this;
        this.beers = [];
        beersService.getBeers().subscribe(function (beers) {
            // Check if it is an array
            if (!beers || Object.prototype.toString.call(beers) !== '[object Array]')
                return;
            beers.forEach(function (beer) {
                var beerPartial = new beer_directive_1.BeerDirective(beersService, beer, router);
                beerPartial.deleted.subscribe(function (id) {
                    _this.removeBeerFromList(id);
                });
                _this.beers.push(beerPartial);
            });
        });
    }
    BeerListComponent.prototype.removeBeerFromList = function (id) {
        var _this = this;
        this.beers.forEach(function (beer) {
            if (beer._id === id) {
                var index = _this.beers.indexOf(beer);
                _this.beers.splice(index, 1);
            }
        });
    };
    BeerListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/beers/beer-list.html',
            directives: [router_deprecated_1.RouterLink],
            pipes: [beerstyleformatter_1.BeerStyleFormatter],
        }), 
        __metadata('design:paramtypes', [beersservice_1.BeersService, router_deprecated_1.Router])
    ], BeerListComponent);
    return BeerListComponent;
}());
exports.BeerListComponent = BeerListComponent;
//# sourceMappingURL=beer-list.component.js.map