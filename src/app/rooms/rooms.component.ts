import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Inject,
  OnDestroy,
  OnInit, SkipSelf,
  ViewChild,
  viewChild
} from '@angular/core';
import {RoomList, Rooms} from './rooms';
import {HeaderComponent} from '../header/header.component';
import {RoomsService} from './services/rooms.service';
import {map, Observable, Subscription} from 'rxjs';
import {HttpEventType} from '@angular/common/http';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit,DoCheck,AfterViewInit,AfterViewChecked{
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent | undefined
  constructor( private roomsService:RoomsService) {
   // const rooms$ = this.roomsService.getRooms$;
  }

  /* roomCount$ = this.roomsService.getRooms$.pipe(
     map((rooms:any[]) => rooms.length),
   )*/

  ngAfterViewChecked(): void {

    }


  stream = new Observable<string>(observer => {
      observer.next('user1');
      observer.next('user2');
      observer.next('user3');
      observer.error('error');
      observer.complete();

  })
  roomList:RoomList[] = [];

   totalBytes = 0;



   //subscription: Subscription;



  ngOnInit(): void {

    this.roomsService.getPhotos().subscribe((event)=>
      {
        switch (event.type)
        {
          case HttpEventType.Sent:
            console.log('sent');
            break;
          case HttpEventType.ResponseHeader:
            console.log('responseHeader');
            break;
          case HttpEventType.DownloadProgress:
            this.totalBytes+=event.loaded;
            break;
          case HttpEventType.Response:
            console.log(event.body);
        }
      }

    );
    this.stream.subscribe(
      {
        next: (value) => console.log(value),
        complete:() => console.log('done'),
        error:() => console.log('error')
      }
    )
   this.stream.subscribe((data) => console.log(data));

   this.roomsService.getRooms$.subscribe(rooms => {
     this.roomList = rooms;
     this.noOfRooms = this.roomList.length;
   });
  }


  hotelName= "Sheraton";
  noOfRooms =  0;
  hiderooms = true;

  selectedRoom!:RoomList
  rooms:Rooms = {
    totalRooms:20,
    availableRooms:10,
    bookedRooms:5
  }


  ngDoCheck() {
    console.log('method called')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }
  title = 'Room List';

  toggle()
  {
    this.hiderooms = !this.hiderooms;
    this.title = "Rooms List"
  }

  //event handler
  selectRoom(room:RoomList)
  {
    this.selectedRoom = room;
  }

  addRoom() {
    const room :RoomList =
      {
        roomNumber:'4',
        roomType: "Deluxe",
        ameneties: "WiFi, TV, Mini Bar",
        price: 120,
        photos: "https://example.com/photos/deluxe.jpg",
        checkinTime: new Date("2024-12-18T14:00:00"),
        checkoutTime: new Date("2024-12-19T11:00:00"),
        rating:1.1
      }
      this.roomList = [...this.roomList,room];
      this.roomsService.addRoom(room).subscribe(
        (data) => {
          this.roomList = data;
        }
      )
  }

  editRoom() {

    const room: RoomList =
      {
        roomNumber: '3',
        roomType: "Deluxe",
        ameneties: "WiFi, TV, Mini Bar",
        price: 120,
        photos: "https://example.com/photos/deluxe.jpg",
        checkinTime: new Date("2024-12-18T14:00:00"),
        checkoutTime: new Date("2024-12-19T11:00:00"),
        rating: 1.1
      }


    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

    deleteRoom()
    {
      this.roomsService.delete('3').subscribe((data) => this.roomList = data);
    }


    ngOnDestroy(): void {
    }

  getPriceCategory(): string {
    if (!this.selectedRoom) {
      return 'No room selected'; // Handle undefined case
    }
   else if (this.selectedRoom.price < 100) {
      return 'cheap';
    } else if (this.selectedRoom.price >= 100 && this.selectedRoom.price < 200) {
      return 'average';
    } else {
      return 'expensive';
    }
  }





}
