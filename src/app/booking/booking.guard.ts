import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { BookingComponent } from './booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BookingGuard implements CanDeactivate<BookingComponent> {

  constructor(private snackBar: MatSnackBar) {}

  canDeactivate(
    component: BookingComponent,
    currentRoute: any,
    currentState: any,
    nextState: any
  ): boolean {
    // Check if the form is pristine (no unsaved changes)
    if (component.bookingForm.pristine) {
      return true; // Allow navigation
    } else {
      // Show snackbar if there are unsaved changes
      this.snackBar.open('You have unsaved changes!', 'DISCARD', {
        duration: 3000,
      });
      return false; // Prevent navigation
    }
  }
}
