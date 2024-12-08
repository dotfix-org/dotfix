import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationService {
  getCurrentLocation(): Observable<string> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
            observer.next(location);
            observer.complete();
          },
          (error) => {
            observer.error('Unable to fetch location.');
          }
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }
}
