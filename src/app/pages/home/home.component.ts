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

  accordionItems = [
    {
      title: 'Jaki jest czas realizacji zamówienia i dostawy płyt betonowych?',
      content: 'Nasz zespół logistyczny dokładnie planuje każde zlecenie, biorąc pod uwagę jego specyfikę i lokalizację dostawy, aby zapewnić optymalny czas realizacji.',
      isOpen: true
    },
    {
      title: 'Czy oferujecie usługi montażu płyt betonowych?',
      content: 'Treść dotycząca usług montażu płyt betonowych.',
      isOpen: false
    },
    {
      title: 'Jakie zrównoważone praktyki są stosowane w procesie produkcji?',
      content: 'Treść dotycząca zrównoważonych praktyk w procesie produkcji.',
      isOpen: false
    },
    {
      title: 'Czy możecie dostarczyć szczegółowe specyfikacje techniczne i dane dotyczące nośności płyt betonowych?',
      content: 'Treść dotycząca specyfikacji technicznych i nośności płyt betonowych.',
      isOpen: false
    }
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


  toggleAccordion(index: number) {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }
}







