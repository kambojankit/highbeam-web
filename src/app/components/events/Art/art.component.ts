import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-art',
    templateUrl: './art.component.html',
    styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
    data : Date = new Date();
    images: Array<string>;
    focus;
    focus1;

    ngOnInit() {
        this.images = ['assets/img/events/art/1.jpeg', 'assets/img/events/art/2.jpeg', 'assets/img/events/art/3.jpeg', 'assets/img/events/art/4.jpeg', 'assets/img/events/art/5.jpeg', 'assets/img/events/art/6.jpeg', 'assets/img/events/art/7.jpeg'];

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
