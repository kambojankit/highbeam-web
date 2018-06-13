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
        this.images = ['assets/img/bg1.jpg', 'assets/img/bg2.jpg', 'assets/img/bg3.jpg'];

        var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
}
