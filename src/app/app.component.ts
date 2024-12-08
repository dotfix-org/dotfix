import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {BookingComponent} from './booking/booking.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, NavbarComponent, SignupComponent, HomeComponent, BookingComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dotfix';
}
