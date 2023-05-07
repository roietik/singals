import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OfferDashboardSignalsComponent} from './components/offer-dashboard-signals/offer-dashboard-signals.component';
import {MenuComponent} from './components/menu/menu.component';
import {OfferCardComponent} from './components/offer-card/offer-card.component';
import {
  OfferDashboardFunctionComponent
} from "./components/offer-dashboard-function/offer-dashboard-function.component";
import {
  OfferDashboardSubjectsComponent
} from "./components/offer-dashboard-subjects/offer-dashboard-subjects.component";

@NgModule({
  declarations: [
    AppComponent,
    OfferDashboardSignalsComponent,
    OfferDashboardFunctionComponent,
    OfferDashboardSubjectsComponent,
    MenuComponent,
    OfferCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
