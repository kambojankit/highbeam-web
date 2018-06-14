import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChooseEventTypeComponent } from '../choose-event-type/choose-event.type.component';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {
    data : Date = new Date();


    constructor(private _modalService: NgbModal) {
    }

    ngOnInit() {
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

    public closeAlert() {
    }

    public bookEvent(plan: string) {
        const modal = this._modalService.open(ChooseEventTypeComponent);
        modal.componentInstance.plan = plan;
    }
}

