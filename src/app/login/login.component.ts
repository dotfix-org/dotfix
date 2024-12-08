import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: "./login.component.html",
  standalone: true,
  styleUrl: './login.component.css'
})


export class LoginComponent {
  loginForm: FormGroup;
  errmsgshow: boolean = false;
  errmsg: string = '';

  constructor(private fb: FormBuilder) {
    // Initialize the login form with form controls
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login submitted:', { email, password });

      // Example logic (Replace with actual API call)
      if (email === 'test@example.com' && password === 'password123') {
        console.log('Login successful!');
      } else {
        this.errmsgshow = true;
        this.errmsg = 'Invalid email or password!';
      }
    } else {
      this.errmsgshow = true;
      this.errmsg = 'Please fill out the form correctly!';
    }
  }
}
