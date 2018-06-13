import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { BookingComponent } from './components/booking/booking.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ImageComponent } from './components/image/image.component';
import {AboutComponent} from "./components/about/about.component";
import {WeddingsComponent} from "./components/events/weddings/weddings.component";
import {ArtComponent} from "./components/events/Art/art.component";
import {ColComponent} from "./components/events/celeberation-of-life/col.component";
import {CorporateComponent} from "./components/events/corporate/corporate.component";
import {MeetingsComponent} from "./components/events/meetings/meetings.component";
import {MusicComponent} from "./components/events/Music/music.component";
import {OthersComponent} from "./components/events/others/others.component";
import {UpcomingEventsComponent} from "./components/upcoming-events/upcoming-events.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {ServiceComponent} from "./components/service/service.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'venue',                component: AboutComponent },
    { path: 'venue/technical',      component: AboutComponent },
    { path: 'venue/location',       component: AboutComponent },
    { path: 'event',                component: WeddingsComponent },
    { path: 'event/wedding',        component: WeddingsComponent },
    { path: 'event/art',            component: ArtComponent },
    { path: 'event/celebration',    component: ColComponent },
    { path: 'event/corporate',      component: CorporateComponent},
    { path: 'event/calendar',       component: UpcomingEventsComponent},
    { path: 'event/meeting',        component: MeetingsComponent },
    { path: 'event/music',          component: MusicComponent},
    { path: 'event/other',          component: OthersComponent},
    { path: 'booknow',              component: BookingComponent },
    { path: 'booknow/:planId',      component: BookingComponent },
    { path: 'rate',                 component: ServiceComponent},
    { path: 'contact',              component: ContactComponent},
    { path: 'gallery',              component: GalleryComponent },
    { path: 'gallery/:image',       component: ImageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: []
})
export class AppRoutingModule {}
