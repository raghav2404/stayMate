import {Component, OnInit} from '@angular/core';
import { RoomList } from '../rooms/rooms';
import {RoomsService} from '../rooms/services/rooms.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css'
})
export class RoomsAddComponent implements OnInit{
  constructor(private roomsService: RoomsService) {
  }
 ngOnInit(): void {

 }
 room:RoomList =
   {
     roomNumber:'',
     roomType: '',
     ameneties:'',
     checkinTime:new Date(),
     checkoutTime:new Date(),
     photos:'',
     price:0,
     rating:0,

   }
   successMessage:string='';
   AddRoom(roomsForm:NgForm)
   {
     this.roomsService.addRoom(this.room).subscribe(
       (data) => {
         this.successMessage = 'Room added successfully.';
         roomsForm.resetForm(
           {
             roomNumber:'',
             roomType: '',
             ameneties:'',
             checkinTime:new Date(),
             checkoutTime:new Date(),
             photos:'',
             price:0,
             rating:0,

           }
         );
       }
     )
   }
}
