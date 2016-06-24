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
var http_1 = require('@angular/http');
var beer_1 = require('../models/beer');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
//import 'rxjs/add/operator/map';
// TODO: get config settings from file
exports.API_ENDPOINT = 'http://localhost:8080/api';
var BeersService = (function () {
    function BeersService(http) {
        this._http = http;
        this._apiEndpoint = exports.API_ENDPOINT; //apiEndpoint;
    }
    BeersService.prototype.getBeers = function () {
        return this.mapBeersReponse(this._http.get(exports.API_ENDPOINT + "/beers"));
    };
    BeersService.prototype.getBeerById = function (id) {
        return this.getBeers().map(function (beers) { return beers.find(function (beer) { return beer._id === id; }); }).first();
    };
    BeersService.prototype.createBeer = function (beer) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.mapBeersReponse(this._http.post(exports.API_ENDPOINT + "/beers", JSON.stringify(beer), options));
    };
    BeersService.prototype.deleteBeer = function (beerId) {
        return this.mapBeersReponse(this._http.delete(exports.API_ENDPOINT + "/beers/" + beerId));
    };
    BeersService.prototype.mapBeersReponse = function (response) {
        return response.map(function (resp) { return resp.json(); })
            .map(function (beersJson) { return beersJson.map(function (beerJson) { return new beer_1.Beer(beerJson); }); })
            .catch(this.handleError);
    };
    BeersService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BeersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BeersService);
    return BeersService;
}());
exports.BeersService = BeersService;
//# sourceMappingURL=beersservice.js.map