import { Input, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChooseEventTypeComponent } from '../choose-event-type/choose-event.type.component';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})

export class ServiceComponent {

    constructor(private _modalService: NgbModal) {
    }

    public closeAlert() {
    }

    public bookEvent(plan: string) {
        const modal = this._modalService.open(ChooseEventTypeComponent);
        modal.componentInstance.plan = plan;
    }
}

