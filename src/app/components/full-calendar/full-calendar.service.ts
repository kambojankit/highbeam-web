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
import {addDays} from "date-fns";
@Injectable()
export class FullCalendarService {
    constructor(private httpClient: HttpClient) { }

    getEvents(): Observable<any> {
        // const path = 'http://localhost:8090/schedule/get';
        const path = 'http://church-api-stg.herokuapp.com/schedule/get';
        return this.httpClient.get(path)
            .map((e:any) =>e)
            .flatMap((event) => event);
    }

    /*

                let data = {
                    start: new Date("2018-08-28"),
                    end: addDays(new Date("2018-08-28"), 0),
                    title: event.title,
                    timezone:'America/California'
                };
     */

    // getEvents(): Observable<any> {
    //     const path = 'http://church-api-stg.herokuapp.com/schedule/get';
    //     return this.httpClient.get(path)
    //         .map((e:any) => {
    //             return {
    //                 start: e.startTime,
    //                 end: e.endTime,
    //                 title: e.title,
    //                 url: e.url
    //             }
    //         });
    // }
}
