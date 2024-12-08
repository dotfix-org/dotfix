import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {MonitorComponent} from './monitor/monitor.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home' ,component:HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booking', component: BookingComponent },
  {path:'monitor',component:MonitorComponent},
  { path: '', redirectTo: '/monitor', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}


