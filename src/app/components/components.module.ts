import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ComponentsComponent } from './components.component';
import { ServiceComponent } from './service/service.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JWBootstrapSwitchModule
      ],
    declarations: [
        ComponentsComponent,
        AboutComponent,
        GalleryComponent,
        FaqComponent,
        TestimonialsComponent,
        ServiceComponent,
        HospitalityComponent,
        BookingComponent
    ],
    exports:[ ComponentsComponent, BookingComponent ]
})
export class ComponentsModule { }
