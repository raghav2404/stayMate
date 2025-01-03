import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckbox} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    MatFormField,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInput,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatIcon,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckbox
  ]
})
export class BookingModule { }
