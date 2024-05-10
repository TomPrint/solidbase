import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CookiePopupComponent } from './shared/cookie-popup/cookie-popup.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { OfferComponent } from './pages/offer/offer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MosaicComponent } from './pages/mosaic/mosaic.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CookiePopupComponent,
    TermsConditionsComponent,
    NavbarComponent,
    CarouselComponent,
    OurWorkComponent,
    PricingComponent,
    OfferComponent,
    MosaicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
