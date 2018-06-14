import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-meetings',
    templateUrl: './meetings.component.html',
    styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
    data : Date = new Date();
    images: Array<string>;
    focus;
    focus1;

    ngOnInit() {
        this.images = ['assets/img/events/meetings/1.jpeg', 'assets/img/events/meetings/2.jpeg', 'assets/img/events/meetings/3.jpeg', 'assets/img/events/meetings/4.jpeg', 'assets/img/events/meetings/5.jpeg', 'assets/img/events/meetings/6.jpeg', 'assets/img/events/meetings/7.jpeg'];

        var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        // navbar.classList.remove('navbar-transparent');
    }
}
