import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-signup',
  imports: [
    FormsModule,
    RouterLink
  ],
    templateUrl: './signup.component.html',
    standalone: true,
    styleUrl: './signup.component.css'
})
export class SignupComponent {

}
