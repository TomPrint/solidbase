import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';
// import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
// import { environment } from 'src/environment';



@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  form!: FormGroup;
  formErrorMessage: string | null = null;
  isFormSubmittedSuccessfully = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user_name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]+\\s[A-Za-z]+$')]],
      user_email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      project: ['', [Validators.required, Validators.minLength(3)]],
      area: ['', [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      voivodeship: ['', Validators.required],
      storey: ['', Validators.required],
      geology: ['', Validators.required],
      start: ['', [Validators.required, ValidatorsService.futureDateValidator()]],
      comments: ['', Validators.maxLength(1500)], // Optional field
      consent: [false, Validators.required] // Checkbox for consent
    });
  }

//   sendEmail(e: Event) {
//     e.preventDefault();
//     if (this.form.valid) {
//       emailjs.sendForm(environment.SERVICE, environment.TEMPLATE, e.target as HTMLFormElement, environment.PUBLIC)
//       .then(() => {
//           console.log('SUCCESS!');
//           this.isFormSubmittedSuccessfully = true; // Show success message
//           this.form.reset(); // Reset the form fields
  
          
//           setTimeout(() => {
//             this.isFormSubmittedSuccessfully = false;
//           }, 3000);
  
//         },
//         (error:any) => {
//           console.log('FAILED...', (error as EmailJSResponseStatus).text);
//         });
//     } else {
//       console.error('Form is not valid');
//       this.formErrorMessage = "Formularz posiada błędy, popraw je.";
//       this.form.markAllAsTouched();
//     }
//   }
}
