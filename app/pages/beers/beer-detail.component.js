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
var checkinsservice_1 = require('../../services/checkinsservice');
var checkin_directive_1 = require('../../directives/checkin.directive');
var averageratingformatter_1 = require('../../pipes/averageratingformatter');
var BeerDetailComponent = (function () {
    function BeerDetailComponent(beersService, checkinsService, router, routeParams) {
        var _this = this;
        this.checkins = [];
        beersService.getBeerById(routeParams.params['id']).subscribe(function (beer) {
            _this.beer = new beer_directive_1.BeerDirective(beersService, beer, router);
        });
        checkinsService.getCheckinsByBeerId(routeParams.params['id']).subscribe(function (checkins) {
            checkins.forEach(function (checkin) {
                _this.checkins.push(new checkin_directive_1.CheckinDirective(checkin, router));
            });
        });
    }
    BeerDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/beers/beer-detail.html',
            pipes: [beerstyleformatter_1.BeerStyleFormatter, averageratingformatter_1.AverageRatingFormatter]
        }), 
        __metadata('design:paramtypes', [beersservice_1.BeersService, checkinsservice_1.CheckinsService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], BeerDetailComponent);
    return BeerDetailComponent;
}());
exports.BeerDetailComponent = BeerDetailComponent;
//# sourceMappingURL=beer-detail.component.js.map