import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChooseEventTypeComponent } from '../choose-event-type/choose-event.type.component';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
    data : Date = new Date();

    // date: Date = new Date();
    options = {
        format: "YYYY-MM-DD HH:mm:ssZZ"
    };

    model = this.getEmptyServiceData();
    submitted = false;

    constructor(private _modalService: NgbModal, private httpClient: HttpClient) {
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

    onSubmit() {
        this.submitted = true;
        this.model['startTime'] = new Date(this.model.startTime)
        this.model['endTime'] = new Date(this.model.endTime)
        // const path = 'http://church-api-stg.herokuapp.com/booking/create';
        const path = 'http://localhost:8090/booking/create';
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        this.httpClient.post(path, this.model, httpOptions).subscribe( d => console.log('saved data: ', d));
    }

    newServiceData() {
       this.model = this.getEmptyServiceData();
    }

    getEmptyServiceData () {
        return new ServiceData(0, '', '','', new Date(),'','',
            0,'',new Date(),new Date());
    }

}

export class ServiceData {
    constructor(
        public id: number,
        public contactName: string,
        public displayNameOfEvent: string,
        public emailId: string,
        public endTime: Date,
        public eventDescription: string,
        public eventType: string,
        public guestsCount: number,
        public phoneNumber: string,
        public preferredEventDate: Date,
        public startTime: Date
    ) {
        this.endTime= new Date()
    }
}