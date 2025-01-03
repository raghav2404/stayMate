import {Inject, Injectable} from '@angular/core';
import {RoomList} from '../rooms';
import {APP_SERVICE_CONFIG} from '../../AppConfig/appconfig.service.cs';
import {AppConfig} from '../../AppConfig/appconfig.interface';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {shareReplay} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
    [x: string]: any;

  roomList:RoomList[] = [];

  getRooms$;

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig ,
              private http:HttpClient) {
  //  const header = new HttpHeaders({'token' : '1234567890fsfsd'});
    this.getRooms$ =  this.http.get<RoomList[]>('/api/rooms').pipe(
      shareReplay(1)
    );
    console.log(this.config.apiEndpoint)
    console.log('initializing room service');
  }


  getRooms() {
    const header = new HttpHeaders({'token' : '1234567890fsfsd'});
    return this.http.get<RoomList[]>('/api/rooms');
    }

    addRoom(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms', room,
      );
    }

    editRoom(room:RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);

    }

    delete(id:string)
    {
      return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
    }


    getPhotos()
    {
      const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos',{
        reportProgress: true
      });
      return this.http.request(request);
    }




}
