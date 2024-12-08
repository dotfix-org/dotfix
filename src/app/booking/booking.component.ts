import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [
    FormsModule
  ],
  templateUrl: './booking.component.html',
  standalone: true,
  styleUrl: './booking.component.css'
})

export class BookingComponent {
  booking = {
    image: null,
    issue: '',
    location: '',
    name: '',
    phone: ''
  };

  constructor(private locationService: LocationService) {}

  onImageUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.booking.image = file;
      console.log('Image uploaded:', file.name);
    }
  }

  getLocation(): void {
    this.locationService.getCurrentLocation().subscribe(
      (location: string) => {
        this.booking.location = location;
      },
      (error: string) => {
        alert('Error fetching location: ' + error);
      }
    );
  }

  submitBooking(): void {
    console.log('Booking Details:', this.booking);
    alert('Your booking has been submitted!');
    // Send booking data to the backend API
  }
}


