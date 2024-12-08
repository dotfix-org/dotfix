import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-monitor',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './monitor.component.html',
  standalone: true,
  styleUrl: './monitor.component.css'
})

export class MonitorComponent{
  currentStep: number = 1; // Initial step
  status: string = 'Start'; // Initial status
  progress: number = 0; // Progress percentage for the progress bar
  showFeedbackModal: boolean = false; // Modal visibility state
  feedback: string = ''; // Feedback text
  rating: number = 0; // Star rating value
  stars: number[] = [1, 2, 3, 4, 5]; // Array for stars display

  // Move to the next step
  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
      this.updateProgressAndStatus();
    }
  }

  // Reset the process
  resetSteps(): void {
    this.currentStep = 1;
    this.progress = 0;
    this.status = 'Start';
    this.showFeedbackModal = false;
    this.feedback = '';
    this.rating = 0;
  }

  // Update progress and status
  updateProgressAndStatus(): void {
    if (this.currentStep === 2) {
      this.status = 'In Progress';
      this.progress = 50;
    } else if (this.currentStep === 3) {
      this.status = 'Completed';
      this.progress = 100;
      this.openFeedbackModal();
    }
  }

  // Open feedback modal
  openFeedbackModal(): void {
    console.log('Opening feedback modal');
    this.showFeedbackModal = true;
  }

  // Close feedback modal
  closeFeedbackModal(): void {
    this.showFeedbackModal = false;
  }

  // Rate the service
  rateService(stars: number): void {
    this.rating = stars;
    console.log(`Service rated with ${stars} stars`);
  }

  // Submit feedback
  submitFeedback(): void {
    console.log('Feedback submitted:', this.feedback);
    console.log('Rating:', this.rating);
    this.closeFeedbackModal();
    this.resetSteps(); // Optionally reset after feedback submission
  }
}
