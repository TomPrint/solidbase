import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ValidatorsService } from 'src/app/services/validators.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit{
  form!: FormGroup;
  formErrorMessage: string | null = null

  constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]+\\s[A-Za-z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      project: ['', [Validators.required, Validators.minLength(3)]],
      area: ['', [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      voivodeship: ['', Validators.required],
      storey: ['', Validators.required],
      roof: ['', Validators.required],
      geology: ['', Validators.required],
      start: ['', [Validators.required, ValidatorsService.futureDateValidator()]],
      comments: ['', Validators.maxLength(1500)], // Optional field
      consent: [false, Validators.required] // Checkbox for consent
    });
  }

  onSubmit(): void {
    this.formErrorMessage = null; // Reset the error message each time the form is submitted
  
    if (this.form.valid) {
      console.log(this.form.value);
      // Proceed with form submission, e.g., send data to your backend
    } else {
      console.error('Form is not valid');
      // Set a global form error message
      this.formErrorMessage = "Formularz posiada błędy, popraw je.";
      this.form.markAllAsTouched(); // This will make sure all fields are checked for validation
    }
}
}


