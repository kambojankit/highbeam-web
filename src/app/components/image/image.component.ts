import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  public heading = ' Gallery';
  public imagesGroup = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg',
      caption: '',
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg'
    },
  ];
  constructor(private route: ActivatedRoute, private _lightbox: Lightbox) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.heading = params.image + this.heading;
    });
    const navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.remove('navbar-transparent');
  }

  imageClick(index: number) {
    this._lightbox.open(this.imagesGroup, index);
  }
}
