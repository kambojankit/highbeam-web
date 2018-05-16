import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    public imagesGroup = [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg',
            imageText: 'Wedding',
            click: 'wedding'
        },
        {
            src: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png',
            imageText: 'Corporate Party',
            click: 'corporate'
        },
        {
            src: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg',
            imageText: 'Concert',
            click: 'concert'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg',
            imageText: 'Talk Show',
            click: 'talk'
        },
        {
            src: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg',
            imageText: 'Stage Show',
            click: 'stage'
        },
        {
            src: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg',
            imageText: 'Others',
            click: 'others'
        }
    ]
    constructor() { }

    imageClick(route) {
        console.log(route);
    }

}
