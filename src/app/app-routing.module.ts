import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { OfferComponent } from './pages/offer/offer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsConditionsComponent},
  { path: 'our-work', component: OurWorkComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'offer', component: OfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
