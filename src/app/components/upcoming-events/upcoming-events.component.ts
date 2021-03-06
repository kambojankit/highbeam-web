// import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
// import {
//     startOfDay,
//     endOfDay,
//     subDays,
//     addDays,
//     endOfMonth,
//     isSameDay,
//     isSameMonth,
//     addHours
// } from 'date-fns';
// import { Subject } from 'rxjs/Subject';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import {
//     CalendarEvent,
//     CalendarEventAction,
//     CalendarEventTimesChangedEvent
// } from 'angular-calendar';
// import { UpcomingEventsService } from './upcoming-events.service';
//
// const colors: any = {
//     red: {
//         primary: '#ad2121',
//         secondary: '#FAE3E3'
//     },
//     blue: {
//         primary: '#1e90ff',
//         secondary: '#D1E8FF'
//     },
//     yellow: {
//         primary: '#e3bc08',
//         secondary: '#FDF1BA'
//     }
// };
//
//
// @Component({
//     selector: 'app-upcoming-events',
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     templateUrl: './upcoming-events.component.html'
// })
// export class UpcomingEventsComponent implements OnInit {
//     @ViewChild('modalContent') modalContent: TemplateRef<any>;
//
//     view = 'month';
//
//     viewDate: Date = new Date();
//
//     modalData: {
//         action: string;
//         event: CalendarEvent;
//     };
//
//     actions: CalendarEventAction[] = [
//         {
//             label: '<i class="fa fa-fw fa-pencil"></i>',
//             onClick: ({ event }: { event: CalendarEvent }): void => {
//                 this.handleEvent('Edited', event);
//             }
//         },
//         {
//             label: '<i class="fa fa-fw fa-times"></i>',
//             onClick: ({ event }: { event: CalendarEvent }): void => {
//                 this.events = this.events.filter(iEvent => iEvent !== event);
//                 this.handleEvent('Deleted', event);
//             }
//         }
//     ];
//
//     refresh: Subject<any> = new Subject();
//
//     events: CalendarEvent[] = [
//         {
//             start: new Date("2018-06-16"),
//             end: addDays(new Date("2018-06-16"), 0),
//             title: 'Music Concert',
//             color: colors.red
//         },
//         {
//             start: new Date("2018-07-20"),
//             end: addDays(new Date("2018-06-22"), 0),
//             title: 'Wedding Reception [Private Event]',
//             color: colors.red
//         },
//         {
//             start: new Date("2018-08-03"),
//             end: addDays(new Date("2018-08-04"), 0),
//             title: 'Vancouver International Mountain Film Festival',
//             color: colors.red
//         },
//         {
//             start: new Date("2018-08-31"),
//             end: addDays(new Date("2018-09-02"), 0),
//             title: 'Wedding Reception [Private Event]',
//             color: colors.red
//         },
//         {
//             start: new Date("2018-09-07"),
//             end: addDays(new Date("2018-09-07"), 0),
//             title: 'Birthday Party [Private Event]',
//             color: colors.red
//         },
//         {
//             start: new Date("2018-09-08"),
//             end: addDays(new Date("2018-09-08"), 0),
//             title: 'Music Concert [Details to be announced]',
//             color: colors.red
//         },
//         {
//             start: new Date("2018-08-18"),
//             end: addDays(new Date("2018-08-18"), 0),
//             title: 'Cuban Music Night',
//             color: colors.red
//         }
//     ];
//
//     activeDayIsOpen = true;
//
//     constructor(private modal: NgbModal, private upcomingEventsService: UpcomingEventsService) { }
//
//     ngOnInit() {
//         this.getEvents();
//      }
//
//      getEvents() {
//          this.upcomingEventsService.getEvents()
//          .subscribe((event) => {
//              event.color = colors.red;
//              event.start = new Date(event.start);
//              event.end = new Date(event.end);
//              this.events.push((event));
//          });
//      }
//
//     dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
//         if (isSameMonth(date, this.viewDate)) {
//             if (
//                 (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
//                 events.length === 0
//             ) {
//                 this.activeDayIsOpen = false;
//             } else {
//                 this.activeDayIsOpen = true;
//                 this.viewDate = date;
//             }
//         }
//     }
//
//     eventTimesChanged({
//         event,
//         newStart,
//         newEnd
//     }: CalendarEventTimesChangedEvent): void {
//         event.start = newStart;
//         event.end = newEnd;
//         this.handleEvent('Dropped or resized', event);
//         this.refresh.next();
//     }
//
//     handleEvent(action: string, event: CalendarEvent): void {
//         this.modalData = { event, action };
//         this.modal.open(this.modalContent, { size: 'lg' });
//     }
//
//     addEvent(): void {
//         this.events.push({
//             title: 'New event',
//             start: startOfDay(new Date()),
//             end: endOfDay(new Date()),
//             color: colors.red,
//             draggable: true,
//             resizable: {
//                 beforeStart: true,
//                 afterEnd: true
//             }
//         });
//         this.refresh.next();
//     }
// }
