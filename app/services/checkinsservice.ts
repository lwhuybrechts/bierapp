import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Checkin } from '../models/checkin';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
//import 'rxjs/add/operator/map';

// TODO: get config settings from file
export var API_ENDPOINT = 'http://localhost:8080/api';

@Injectable()
export class CheckinsService {
    private _http: Http;
    private _apiEndpoint: string;

    constructor(http: Http) {//, @Inject('API_ENDPOINT') apiEndpoint: string) {
        this._http = http;
        this._apiEndpoint = API_ENDPOINT; //apiEndpoint;
    }

    public getCheckins(): Observable<Checkin[]> {
        return this.mapCheckinsReponse(this._http.get(`${API_ENDPOINT}/checkins`));
    }

    public getCheckinById(id: string): Observable<Checkin> {
        return this.getCheckins().map(checkins => checkins.find(checkin => checkin._id === id)).first();
    }

    public getCheckinsByBeerId(beerId: string): Observable<Checkin[]> {
        return this.getCheckins().map(checkins => checkins.filter(checkin => checkin.beerId === beerId));
    }

    public createCheckin(checkin: Checkin): Observable<Checkin[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.mapCheckinsReponse(this._http.post(`${API_ENDPOINT}/checkins`, JSON.stringify(checkin), options));
    }

    private mapCheckinsReponse(response: Observable<Response>): Observable<Checkin[]> {
        return response.map(resp => <any[]>resp.json())
            .map(checkinsJson => checkinsJson.map(checkinJson => new Checkin(checkinJson)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}