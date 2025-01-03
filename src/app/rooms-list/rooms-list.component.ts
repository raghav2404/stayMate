import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomList} from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges,OnDestroy {
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if (changes['title']) {

          this.title = changes['title'].currentValue.toUpperCase()


        }
    }

  @Input() rooms :RoomList[] = []
  @Input() title:string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();
  selectRoom(room:RoomList)
  {
    this.selectedRoom.emit(room);
  }

    ngOnInit(){


    }


  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }



}
