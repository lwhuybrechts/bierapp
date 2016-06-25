import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, RouterOutlet, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Component, provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { bootstrap }    from '@angular/platform-browser-dynamic';

import { BeersService } from './services/beersservice';
import { CheckinsService } from './services/checkinsservice';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BeerListComponent } from './pages/beers/beer-list.component';
import { BeerDetailComponent } from './pages/beers/beer-detail.component';
import { BeerAddComponent } from './pages/beers/beer-add.component';
import { CheckinListComponent } from './pages/checkins/checkin-list.component';
import { CheckinAddComponent } from './pages/checkins/checkin-add.component';

// TODO: get config settings from file
// export var API_ENDPOINT = 'http://localhost:8080/api/';

@Component({
  selector: 'bierapp',
  templateUrl: 'app/app.html',
  directives: [RouterOutlet, HeaderComponent, FooterComponent]
})
@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent },
  { path: '/beers', as: 'BeerList', component: BeerListComponent },
  { path: '/beers/:id', as: 'BeerDetails', component: BeerDetailComponent },
  { path: '/beers/add', as: 'BeerAdd', component: BeerAddComponent },
  { path: '/checkins', as: 'CheckinList', component: CheckinListComponent },
  { path: '/checkins/add', as: 'CheckinAdd', component: CheckinAddComponent }
])
export class AppComponent { }

bootstrap(AppComponent,
  [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    //provide(API_ENDPOINT, { useValue: 'http://localhost:8080/api/' }),
    BeersService,
    CheckinsService,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
  ]);