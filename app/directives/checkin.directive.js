"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var checkin_1 = require('../models/checkin');
var beer_directive_1 = require('../directives/beer.directive');
var CheckinDirective = (function (_super) {
    __extends(CheckinDirective, _super);
    function CheckinDirective(checkin, router, beerDirective) {
        _super.call(this, checkin);
        this._router = router;
        this.beer = beerDirective;
    }
    CheckinDirective = __decorate([
        core_1.Directive({}), 
        __metadata('design:paramtypes', [checkin_1.Checkin, router_deprecated_1.Router, beer_directive_1.BeerDirective])
    ], CheckinDirective);
    return CheckinDirective;
}(checkin_1.Checkin));
exports.CheckinDirective = CheckinDirective;
//# sourceMappingURL=checkin.directive.js.map