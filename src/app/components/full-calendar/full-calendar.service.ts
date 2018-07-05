import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CalendarEvent } from 'calendar-utils';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map'
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
@Injectable()
export class FullCalendarService {
    constructor(private httpClient: HttpClient) { }

    getEvents(): Observable<CalendarEvent> {
        const path = 'http://www.json-generator.com/api/json/get/cfRZxLvBrC?indent=2';
        return this.httpClient.get(path)
            .map((events: CalendarEvent[]) => events)
            .filter(e => false)
            .flatMap((event) => event);
    }
}
