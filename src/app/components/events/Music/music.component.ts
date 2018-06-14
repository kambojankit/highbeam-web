import {Component, OnInit} from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
    data : Date = new Date();
    images: Array<string>;
    focus;
    focus1;

    ngOnInit() {
        this.images = [ 'assets/img/events/music/1.jpeg', 'assets/img/events/music/2.jpeg', 'assets/img/events/music/3.jpeg',  'assets/img/events/music/4.jpeg', 'assets/img/events/music/5.jpeg'];

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
