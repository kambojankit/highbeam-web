import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, OnDestroy {

    data: Date = new Date();
    focus;
    focus1;
    private selectedPlan = '';

    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((param) => {
            this.selectedPlan = param.planId;
        });
    }

    ngOnInit() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
