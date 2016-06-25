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
var checkin_1 = require('../models/checkin');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
exports.API_ENDPOINT = 'http://localhost:8080/api';
var CheckinsService = (function () {
    function CheckinsService(http) {
        this._http = http;
        this._apiEndpoint = exports.API_ENDPOINT;
    }
    CheckinsService.prototype.getCheckins = function () {
        return this.mapCheckinsReponse(this._http.get(exports.API_ENDPOINT + "/checkins"));
    };
    CheckinsService.prototype.getCheckinById = function (id) {
        return this.getCheckins().map(function (checkins) { return checkins.find(function (checkin) { return checkin._id === id; }); }).first();
    };
    CheckinsService.prototype.getCheckinsByBeerId = function (beerId) {
        return this.getCheckins().map(function (checkins) { return checkins.filter(function (checkin) { return checkin.beerId === beerId; }); });
    };
    CheckinsService.prototype.createCheckin = function (checkin) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.mapCheckinsReponse(this._http.post(exports.API_ENDPOINT + "/checkins", JSON.stringify(checkin), options));
    };
    CheckinsService.prototype.mapCheckinsReponse = function (response) {
        return response.map(function (resp) { return resp.json(); })
            .map(function (checkinsJson) { return checkinsJson.map(function (checkinJson) { return new checkin_1.Checkin(checkinJson); }); })
            .catch(this.handleError);
    };
    CheckinsService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CheckinsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CheckinsService);
    return CheckinsService;
}());
exports.CheckinsService = CheckinsService;
//# sourceMappingURL=checkinsservice.js.map