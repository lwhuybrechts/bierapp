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
var AverageRatingFormatter = (function () {
    function AverageRatingFormatter() {
    }
    AverageRatingFormatter.prototype.transform = function (checkins) {
        if (!checkins || checkins.length === 0)
            return 0;
        var ratings = checkins.map(function (checkin) { return checkin.rating; });
        var sum = ratings.reduce(function (previous, current) { return previous + current; }, 0);
        return sum / checkins.length;
    };
    AverageRatingFormatter = __decorate([
        core_1.Pipe({
            name: 'averageratingformatter'
        }), 
        __metadata('design:paramtypes', [])
    ], AverageRatingFormatter);
    return AverageRatingFormatter;
}());
exports.AverageRatingFormatter = AverageRatingFormatter;
//# sourceMappingURL=averageratingformatter.js.map