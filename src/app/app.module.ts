import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgnaisationComponent } from './component/orgnaisation/orgnaisation.component';
import { AnalyticsComponent } from './component/analytics/analytics.component';
import {OrganisationDetailsService} from "./services/organisation-details.service";
import {AnalyticsService} from "./services/analytics.service";
import {NgxPaginationModule} from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrgnaisationComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [OrganisationDetailsService, AnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
