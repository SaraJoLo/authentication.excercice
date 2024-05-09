import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  registerForm!: FormGroup;
  submitted = false;
  
  products!: Observable < User[] >
  
  constructor(private fb:FormBuilder){
    this.registerForm = fb.group({
      name: [
        '',
        Validators.required
      ],
      password: [
        '',
        [Validators.required,
          Validators.minLength(8), 
          Validators.pattern("‘^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$’")]
      ],
      email: [
        '',
        [Validators.required,
          Validators.email
        ]
      ]
    })
  }
  
  submit(){

    console.log(this.registerForm.value)
  }

 }
