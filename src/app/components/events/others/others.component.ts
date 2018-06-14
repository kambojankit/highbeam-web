import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-others',
    templateUrl: './others.component.html',
    styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
    data : Date = new Date();
    images: Array<string>;
    focus;
    focus1;

    ngOnInit() {
        this.images = [
            'assets/img/events/others/1.jpeg',
            'assets/img/events/others/2.jpeg',
            'assets/img/events/others/3.jpeg',
            'assets/img/events/others/4.jpeg',
            'assets/img/events/others/5.jpeg'
        ];

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
