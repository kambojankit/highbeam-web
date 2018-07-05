import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { addDays, addHours } from 'date-fns';


@Component({
    selector: 'app-full-calendar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./full-calendar.component.scss'],
    templateUrl: './full-calendar.component.html'
})
export class FullCalendarComponent implements OnInit {

    ngOnInit(): void {
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
                start: new Date("2018-06-16"),
                end: addDays(new Date("2018-06-16"), 1),
                title: 'Music Concert'
            },
            {
                start: new Date("2018-07-20"),
                end: addDays(new Date("2018-07-20"), 2),
                title: 'Wedding Reception [Private Event]'
            },
            {
                start: new Date("2018-08-03"),
                end: addDays(new Date("2018-08-03"), 1),
                title: 'Vancouver International Mountain Film Festival'
            },
            {
                start: new Date("2018-08-31"),
                end: addDays(new Date("2018-09-02"), 0),
                title: 'Wedding Reception [Private Event]'
            },
            {
                start: new Date("2018-09-07"),
                end: addDays(new Date("2018-09-07"), 0),
                title: 'Birthday Party [Private Event]'
            },
            {
                start: new Date("2018-09-08"),
                end: addDays(new Date("2018-09-08"), 0),
                title: 'Music Concert [Details to be announced]'
            },
            {
                start: new Date("2018-08-18"),
                end: addDays(new Date("2018-08-18"), 0),
                title: 'Cuban Music Night'
            }
        ],
        eventRender: this.eventPopover,

    };

    onCalendarInit(initialized: boolean) {
        console.log('Calendar initialized');
    }

    eventPopover(event, element) {
        console.log(element)
    }


}
