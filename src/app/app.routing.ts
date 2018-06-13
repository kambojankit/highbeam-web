import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { BookingComponent } from './components/booking/booking.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ImageComponent } from './components/image/image.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: ComponentsComponent
  },
  {
    path: 'nucleoicons',
    component: TestimonialsComponent
  },
  {
    path: 'booknow',
    component: BookingComponent
  },
  {
    path: 'booknow/:planId',
    component: BookingComponent
  },
  {
    path: 'gallery/:image',
    component: ImageComponent
  }
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
