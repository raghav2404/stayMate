import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {RoomsComponent} from './rooms/rooms.component';
import {NotfounfComponent} from './notfounf/notfounf.component';
import {RoomsBookingComponent} from './rooms-booking/rooms-booking.component';
import {RoomsAddComponent} from './rooms-add/rooms-add.component';
import {LoginComponent} from './login/login.component';
import {loginGuard} from './guards/login.guard';
import {romGuard} from './guards/rom.guard';

const routes: Routes = [
  {path:'employees',component:EmployeeComponent,canActivate:[loginGuard]},
  {path:'rooms/add',component:RoomsAddComponent},
  {path:'rooms',component:RoomsComponent , canActivateChild:[romGuard]},
  { path: 'booking/:roomId', loadChildren: () =>
      import('./booking/booking.module').then(m => m.BookingModule) }, //default url


  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/rooms',pathMatch: 'full'},
  {path:'**',component:NotfounfComponent} //wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
