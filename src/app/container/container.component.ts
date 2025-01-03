import {AfterContentInit, Component, ContentChild, Host} from '@angular/core';
import {EmployeeComponent} from '../employee/employee.component';
import {RoomsService} from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  //providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {


  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;
  constructor(private roomService:RoomsService    ) {
  }
    ngAfterContentInit(): void {
        console.log(this.employee);
        this.employee.empName   = "Pat Cummins"
    }

}
