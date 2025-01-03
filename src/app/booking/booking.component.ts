import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {disableDebugTools} from '@angular/platform-browser';
import ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import ThrowProjectDoesNotContainDocument = ts.server.Errors.ThrowProjectDoesNotContainDocument;
import {BookingService} from './booking.service';
import {mergeMap} from 'rxjs';
import {VALIDATORS} from './validators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;
  get guests()
  {
   return  this.bookingForm.get('guests') as FormArray
  }


  constructor(private fb:FormBuilder,private bookingService: BookingService,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    this.bookingForm = this.fb.group({
      roomId: new FormControl({value:roomId, disabled: true}, {validators: [Validators.required]}),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(3),VALIDATORS.ValidateName,VALIDATORS.ValidateSpecialChar('*')]],

      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],

      }),

      guests: this.fb.array([this.fb.group(
        {guestName:[''], age:new FormControl('')}),
      ]),
      termsndconditions:new FormControl(false,{validators:[Validators.requiredTrue]}),
    } ,{validators:[VALIDATORS.validedate]})

    this.getBookingData();

    this.bookingForm.valueChanges.pipe(
      mergeMap((data) => this.bookingService.bookRoom(data)
      )
    )
  };
  addBooking() {

    this.bookingForm.reset({
      roomId: '1',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',


      address: this.fb.group({
        addressLine1: ['', [Validators.required, Validators.minLength(5)]],
        addressLine2: [''],
        city: ['', {validators: [Validators.required, Validators.minLength(2)]}],
        state: ['', {
          validators: [Validators.required, Validators.minLength(1)]
        }],
        country: [''],
        zipCode: [''],
      }),
    })
  }



 addPassport()
 {
   this.bookingForm.addControl('passport',new FormControl(''));
 }
 deletePassport()
 {
   if (this.bookingForm.get('passport'))
   this.bookingForm.removeControl('passport');
 }

 removeGuest(i:number)
 {
   this.guests.removeAt(i);
 }

 addGuest()
 {
   this.guests.push(
     this.addGuestHelper()
   );
 }
 addGuestHelper()
 {
   return this.fb.group({guestName:['',{validators:[Validators.required]}], age:new FormControl('')});
 }


 getBookingData()
 {
   this.bookingForm.patchValue(
     {
       guestEmail: 'rr@gmail.com',
       checkinDate: new Date('10-01-2025'),
       checkoutDate: '',
       bookingStatus: '',
       bookingAmount: '',
       bookingDate: '',
       mobileNumber: '',
       guestName: '',
     }
   )
 }

}


