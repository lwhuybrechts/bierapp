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
var beersservice_1 = require('../../services/beersservice');
var checkin_1 = require('../../models/checkin');
var beer_directive_1 = require('../../directives/beer.directive');
var CheckinAddComponent = (function () {
    function CheckinAddComponent(checkinsService, beersService, router, routeParams) {
        var _this = this;
        this.beers = [];
        this.checkin = new checkin_1.Checkin({
            _id: 0,
            beerId: 0,
            comment: "",
            rating: 0
        });
        this._checkinsService = checkinsService;
        this._router = router;
        beersService.getBeers().subscribe(function (beers) {
            if (!beers || Object.prototype.toString.call(beers) !== '[object Array]')
                return;
            beers.forEach(function (beer) {
                _this.beers.push(new beer_directive_1.BeerDirective(beersService, beer, router));
            });
        });
    }
    CheckinAddComponent.prototype.addCheckin = function () {
        var _this = this;
        this._checkinsService.createCheckin(this.checkin).subscribe(function (checkins) {
            _this._router.navigate(['CheckinList', {}]);
        });
    };
    CheckinAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/checkins/checkin-add.html'
        }), 
        __metadata('design:paramtypes', [checkinsservice_1.CheckinsService, beersservice_1.BeersService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], CheckinAddComponent);
    return CheckinAddComponent;
}());
exports.CheckinAddComponent = CheckinAddComponent;
//# sourceMappingURL=checkin-add.component.js.map