import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  currentIndex = 1;
  images = [
    'assets/car1.jpg',
    'assets/car3.jpg',
    'assets/car5.jpg',
  ];





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

  get displayedImages(): string[] {
    return [
      this.images[(this.currentIndex + this.images.length - 1) % this.images.length], // Previous image
      this.images[this.currentIndex], // Current image
      this.images[(this.currentIndex + 1) % this.images.length] // Next image
    ];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex + this.images.length - 1) % this.images.length;
  }
}





