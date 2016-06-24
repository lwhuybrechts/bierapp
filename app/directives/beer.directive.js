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
var beersservice_1 = require('../services/beersservice');
var beer_1 = require('../models/beer');
var IMAGE_FOLDER = "/app/images";
var BeerDirective = (function (_super) {
    __extends(BeerDirective, _super);
    function BeerDirective(beersService, beer, router) {
        _super.call(this, beer);
        this._image = "";
        this.deleted = new core_1.EventEmitter();
        this._beersService = beersService;
        this._router = router;
    }
    Object.defineProperty(BeerDirective.prototype, "image", {
        get: function () {
            return IMAGE_FOLDER + "/" + this._id + ".jpg";
        },
        enumerable: true,
        configurable: true
    });
    BeerDirective.prototype.navigate = function () {
        this._router.navigate(['Beer', { id: this._id }]);
    };
    BeerDirective.prototype.delete = function (event) {
        var _this = this;
        event.stopPropagation();
        if (confirm("Weet je zeker dat je \"" + this.name + "\" wil weggooien?")) {
            this._beersService.deleteBeer(this._id).subscribe(function (beers) {
                _this.deleted.next(_this._id);
            });
        }
    };
    BeerDirective = __decorate([
        core_1.Directive({
            outputs: ['deleted']
        }), 
        __metadata('design:paramtypes', [beersservice_1.BeersService, beer_1.Beer, router_deprecated_1.Router])
    ], BeerDirective);
    return BeerDirective;
}(beer_1.Beer));
exports.BeerDirective = BeerDirective;
//# sourceMappingURL=beer.directive.js.map