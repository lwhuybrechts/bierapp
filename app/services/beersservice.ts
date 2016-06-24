import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Beer } from '../models/beer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

// TODO: get config settings from file
export var API_ENDPOINT = 'http://localhost:8080/api';

@Injectable()
export class BeersService {
    private _http: Http;
    private _apiEndpoint: string;

    constructor(http: Http) {//, @Inject('API_ENDPOINT') apiEndpoint: string) {
        this._http = http;
        this._apiEndpoint = API_ENDPOINT; //apiEndpoint;
    }

    public getBeers(): Observable<Beer[]> {
        return this.mapBeersReponse(this._http.get(`${API_ENDPOINT}/beers`));
    }

    public getBeerById(id: string): Observable<Beer> {
        return this.getBeers().map(beers => beers.find(beer => beer._id === id)).first();
    }

    public createBeer(beer: Beer): Observable<Beer[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.mapBeersReponse(this._http.post(`${API_ENDPOINT}/beers`, JSON.stringify(beer), options));
    }

    public deleteBeer(beerId: string): Observable<Beer[]> {
        return this.mapBeersReponse(this._http.delete(`${API_ENDPOINT}/beers/${ beerId }`));
    }

    private mapBeersReponse(response: Observable<Response>): Observable<Beer[]> {
        return response.map(resp => <any[]>resp.json())
            .map(beersJson => beersJson.map(beerJson => new Beer(beerJson)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}