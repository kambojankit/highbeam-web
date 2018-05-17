import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-choose-event-type',
    templateUrl: 'choose-event-type.component.html'
})

export class ChooseEventTypeComponent implements OnInit {
    public eventForm: FormGroup;
    public step = 'choose-event';
    @Input()
    public plan: string;
    constructor(private _fb: FormBuilder, private activeModal: NgbActiveModal) { }

    ngOnInit() {
        this.eventForm = this._fb.group({
            type: ['', Validators.required],
            guestCount: ['', Validators.required],
            location: ['', Validators.required],
            date: ['', Validators.required],
            name: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    done() {
        console.log(this.eventForm.value);
    }
}
