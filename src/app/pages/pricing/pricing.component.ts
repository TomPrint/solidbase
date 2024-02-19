import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit{
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      project: ['', Validators.required],
      area: ['', [Validators.required, Validators.min(0)]],
      voivodeship: ['', Validators.required],
      storey: ['', Validators.required],
      roof: ['', Validators.required],
      geology: ['', Validators.required],
      start: ['', Validators.required],
      comments: [''], // Optional field
      consent: [false, Validators.requiredTrue] // Checkbox for consent
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      // Handle form submission, e.g., send data to your backend
    } else {
      // Handle form errors
      console.error('Form is not valid');
    }
  }
}


