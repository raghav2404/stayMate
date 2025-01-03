import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent {


   id$: any
  constructor(private router:ActivatedRoute) {
    this.id$ = this.router.paramMap.pipe(map(
      (params) => params.get('roomId')));
  }


}
