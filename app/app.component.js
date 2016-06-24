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
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var beersservice_1 = require('./services/beersservice');
var header_component_1 = require('./pages/layout/header/header.component');
var footer_component_1 = require('./pages/layout/footer/footer.component');
var home_component_1 = require('./pages/home/home.component');
var beer_list_component_1 = require('./pages/beers/beer-list.component');
var beer_detail_component_1 = require('./pages/beers/beer-detail.component');
var beer_add_component_1 = require('./pages/beers/beer-add.component');
// TODO: get config settings from file
// export var API_ENDPOINT = 'http://localhost:8080/api/';
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'bierapp',
            templateUrl: 'app/app.html',
            directives: [router_deprecated_1.RouterOutlet, header_component_1.HeaderComponent, footer_component_1.FooterComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', as: 'Home', component: home_component_1.HomeComponent },
            { path: '/beers', as: 'Beers', component: beer_list_component_1.BeerListComponent },
            { path: '/beers/:id', as: 'Beer', component: beer_detail_component_1.BeerDetailComponent },
            { path: '/beers/add', as: 'Add', component: beer_add_component_1.BeerAddComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    //provide(API_ENDPOINT, { useValue: 'http://localhost:8080/api/' }),
    beersservice_1.BeersService,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=app.component.js.map