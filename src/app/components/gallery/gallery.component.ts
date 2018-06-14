import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    public imagesGroup = [
        {
            src: 'assets/img/church/headers/wedding-1.jpeg',
            imageText: 'Wedding',
            click: 'wedding'
        },
        {
            src: 'assets/img/church/headers/corporate-1.jpeg',
            imageText: 'Corporate Party',
            click: 'corporate'
        },
        {
            src: 'assets/img/church/headers/music-1.jpeg',
            imageText: 'Music',
            click: 'music'
        },
        {
            src: 'assets/img/church/headers/meeting-1.jpeg',
            imageText: 'Meeting',
            click: 'meeting'
        },
        {
            src: 'assets/img/church/headers/col-1.jpeg',
            imageText: 'Celebration Of Life',
            click: 'celebration'
        },
        {
            src: 'assets/img/church/headers/other-1.jpeg',
            imageText: 'Others',
            click: 'others'
        }
    ]
    constructor() { }

    imageClick(route) {
        console.log(route);
    }

}
