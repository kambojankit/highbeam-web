import {
    AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit,
    ViewChild
} from '@angular/core';
import { addDays, addHours } from 'date-fns';
import { FullCalendarService } from './full-calendar.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CalendarEvent} from "angular-calendar";
import {Subject} from "rxjs/Subject";

import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;


const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: 'app-full-calendar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./full-calendar.component.scss'],
    templateUrl: './full-calendar.component.html'
})
export class FullCalendarComponent implements OnInit, AfterViewInit {
    // @ViewChild('angular2-fullcalendar') el:ElementRef;

    constructor(private fullCalendarService: FullCalendarService) { }

    refresh: Subject<any> = new Subject();

    events  = []
    ngOnInit() {
        this.getEvents();
     }

    ngAfterViewInit(){
        this.refresh.subscribe( e => {
            console.log("100ms after ngAfterViewInit ", this.events);
            $('angular2-fullcalendar').fullCalendar('addEventSource',this.events);
            $('angular2-fullcalendar').fullCalendar('render');
        });
    }


    getEvents() {
        this.fullCalendarService.getEvents()
            .subscribe(e => {
                console.log('fetching events', e);
                let data = {
                    start: new Date(Date.parse(e.startTime)),
                    end: new Date(Date.parse(e.endTime)),
                    title: e.title,
                    url: e.url
                }
                this.events.push((data));
                this.refresh.next();
            });
    }


    calendarOptions:Object = {
        height: 700,
        timeFormat: 'H:mm',
        eventTextColor: '#ffffff',
        eventColor: '#149194',
        displayEventEnd: false,
        defaultView: 'month',
        header: {
            left:   'today prev,next',
            center: 'title',
            right:  'month,agendaWeek,listMonth'
        },
        buttonIcons: {
            prev: 'left-single-arrow',
            next: 'right-single-arrow'
        },
        buttonText: {
            today:      'Today',
            month:      'Month',
            agendaWeek: 'Week',
            listMonth:       'List'
        },
        fixedWeekCount : false,
        defaultDate: new Date(),
        editable: false,
        eventLimit: true, // for all non-agenda views
        views: {
            month: {
                eventLimit: 3 // adjust to 6 only for agendaWeek/agendaDay
            }
        },
        events: [
            {
                start: (new Date("2018-06-16")).getUTCDate(),
                end: addDays(new Date("2018-06-16"), 1),
                title: 'Music Concert',
                timezone:'America/California'
            },
            {
                start: new Date("2018-07-20"),
                end: addDays(new Date("2018-07-20"), 2),
                title: 'Wedding Reception [Private Event]',
                timezone:'America/California'
            },
            {
                start: new Date("2018-08-03"),
                end: addDays(new Date("2018-08-03"), 1),
                title: 'Vancouver International Mountain Film Festival',
                timezone:'America/California'
            },
            {
                start: new Date("2018-08-31"),
                end: addDays(new Date("2018-09-02"), 0),
                title: 'Wedding Reception [Private Event]',
                timezone:'America/California'
            },
            {
                start: new Date("2018-09-07"),
                end: addDays(new Date("2018-09-07"), 0),
                title: 'Birthday Party [Private Event]',
                timezone:'America/California'
            },
            {
                start: new Date("2018-09-08"),
                end: addDays(new Date("2018-09-08"), 0),
                title: 'Music Concert [Details to be announced]',
                timezone:'America/California'
            }
        ],
        eventRender: this.eventPopover,
        eventClick: function(calEvent, jsEvent, view) {
            window.open(calEvent.url);
            return false;
        }

    };

    onCalendarInit(event: any) {
        console.log('initialised', event)
    }

    eventPopover(event, element) {
        console.log('poppedOver', event, element)
    }


}
