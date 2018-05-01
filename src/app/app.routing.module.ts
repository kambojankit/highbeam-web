import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { ComponentsComponent } from './components/components.component';

export const AppRoutes: Routes = [
    { path: '', component: ComponentsComponent },
    { path: 'booknow/:planId', component: BookingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
]
