import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { LightboxModule } from 'angular2-lightbox';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {FooterComponent} from "./shared/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule,
        LightboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
