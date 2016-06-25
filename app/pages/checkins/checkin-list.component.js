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
var checkinsservice_1 = require('../../services/checkinsservice');
var checkin_directive_1 = require('../../directives/checkin.directive');
var beersservice_1 = require('../../services/beersservice');
var beer_directive_1 = require('../../directives/beer.directive');
var dateformatter_1 = require('../../pipes/dateformatter');
var CheckinListComponent = (function () {
    function CheckinListComponent(checkinsService, router, beersService) {
        var _this = this;
        this.checkins = [];
        checkinsService.getCheckins().subscribe(function (checkins) {
            if (!checkins || Object.prototype.toString.call(checkins) !== '[object Array]')
                return;
            beersService.getBeersByIds(checkins.map(function (checkin) { return checkin.beerId; })).subscribe(function (beers) {
                if (!beers || Object.prototype.toString.call(beers) !== '[object Array]')
                    return;
                checkins.forEach(function (checkin) {
                    var checkinDirective = new checkin_directive_1.CheckinDirective(checkin, router);
                    var beer = beers.find(function (beer) { return beer._id === checkin.beerId; });
                    if (beer) {
                        var beerDirective = new beer_directive_1.BeerDirective(beersService, beer, router);
                        checkinDirective.beer = beerDirective;
                    }
                    _this.checkins.push(checkinDirective);
                });
            });
        });
    }
    CheckinListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/checkins/checkin-list.html',
            directives: [router_deprecated_1.RouterLink],
            pipes: [dateformatter_1.DateFormatter],
        }), 
        __metadata('design:paramtypes', [checkinsservice_1.CheckinsService, router_deprecated_1.Router, beersservice_1.BeersService])
    ], CheckinListComponent);
    return CheckinListComponent;
}());
exports.CheckinListComponent = CheckinListComponent;
//# sourceMappingURL=checkin-list.component.js.map