import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  constructor() {}

  ngAfterViewInit(): void {
    AOS.init();
  }

  // Example method to demonstrate refreshing AOS
  // Call this method if you dynamically load or change content
  someContentLoadingMethod() {
    // Assume this method loads or changes content dynamically
    // ...

    // After the content is loaded/changed
    AOS.refresh();
  }
}

