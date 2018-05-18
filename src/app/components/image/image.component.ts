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
      caption: 'Wedding',
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg'
    },
    {
      src: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png',
      caption: 'Corporate Party',
      thumb: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png'
    },
    {
      src: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg',
      caption: 'Concert',
      thumb: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg',
      caption: 'Talk Show',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg'
    },
    {
      src: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg',
      caption: 'Stage Show',
      thumb: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg'
    },
    {
      src: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg',
      caption: 'Others',
      thumb: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg',
      caption: 'Wedding',
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg'
    },
    {
      src: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png',
      caption: 'Corporate Party',
      thumb: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png'
    },
    {
      src: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg',
      caption: 'Concert',
      thumb: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg',
      caption: 'Talk Show',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg'
    },
    {
      src: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg',
      caption: 'Stage Show',
      thumb: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg'
    },
    {
      src: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg',
      caption: 'Others',
      thumb: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg',
      caption: 'Wedding',
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg'
    },
    {
      src: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png',
      caption: 'Corporate Party',
      thumb: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png'
    },
    {
      src: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg',
      caption: 'Concert',
      thumb: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg',
      caption: 'Talk Show',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg'
    },
    {
      src: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg',
      caption: 'Stage Show',
      thumb: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg'
    },
    {
      src: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg',
      caption: 'Others',
      thumb: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg',
      caption: 'Wedding',
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg'
    },
    {
      src: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png',
      caption: 'Corporate Party',
      thumb: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png'
    },
    {
      src: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg',
      caption: 'Concert',
      thumb: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg',
      caption: 'Talk Show',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg'
    },
    {
      src: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg',
      caption: 'Stage Show',
      thumb: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg'
    },
    {
      src: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg',
      caption: 'Others',
      thumb: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg',
      caption: 'Wedding',
      thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbBs3fq1O2UfzkVZaeQF8J-93qPH1ZDEbpXON49oVgOIA0ETtcg'
    },
    {
      src: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png',
      caption: 'Corporate Party',
      thumb: 'http://i0.wp.com/magmaeventbangkok.com/wp-content/uploads/cache/images/2018/04/Quality-Control-in-Events-Management/Quality-Control-in-Events-Management-234923578.png'
    },
    {
      src: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg',
      caption: 'Concert',
      thumb: 'https://ghostoflove.files.wordpress.com/2011/10/436719984.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg',
      caption: 'Talk Show',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg/800px-Festivalgel%C3%A4nde_-_Wacken_Open_Air_2015-3475.jpg'
    },
    {
      src: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg',
      caption: 'Stage Show',
      thumb: 'http://www.lightsoundjournal.com/images/2009/riedel/Andrea%20Bocelli_Belo_Horizonte.jpeg'
    },
    {
      src: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg',
      caption: 'Others',
      thumb: 'https://www.parenting.in/wp-content/uploads/2017/11/Respect.jpg'
    }
  ];
  constructor(private route: ActivatedRoute, private _lightbox: Lightbox) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.heading = params.image + this.heading;
    });
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  imageClick(index: number) {
    this._lightbox.open(this.imagesGroup, index);
  }
}
