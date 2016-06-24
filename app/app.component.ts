import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, RouterOutlet, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Component, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { bootstrap }    from '@angular/platform-browser-dynamic';

import { BeersService } from './services/beersservice';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BeerListComponent } from './pages/beers/beer-list.component';
import { BeerDetailComponent } from './pages/beers/beer-detail.component';
import { BeerAddComponent } from './pages/beers/beer-add.component';

// TODO: get config settings from file
// export var API_ENDPOINT = 'http://localhost:8080/api/';

@Component({
  selector: 'bierapp',
  templateUrl: 'app/app.html',
  directives: [RouterOutlet, HeaderComponent, FooterComponent]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent },
  { path: '/beers', as: 'Beers', component: BeerListComponent },
  { path: '/beers/:id', as: 'Beer', component: BeerDetailComponent },
  { path: '/beers/add', as: 'Add', component: BeerAddComponent }
])
export class AppComponent { }

bootstrap(AppComponent,
  [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    //provide(API_ENDPOINT, { useValue: 'http://localhost:8080/api/' }),
    BeersService,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ]);