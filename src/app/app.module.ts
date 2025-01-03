import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import {APP_CONFIG, APP_SERVICE_CONFIG} from './AppConfig/appconfig.service.cs';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './request.interceptor';

import {RouterModule} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfounfComponent } from './notfounf/notfounf.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GlobalErrorHandler} from './booking/error-handler.service';



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfounfComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,

  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {

      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true,
    },
    {
      provide:ErrorHandler, useClass:GlobalErrorHandler
    }
  ]
})
export class AppModule { }
