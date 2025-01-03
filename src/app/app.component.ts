import {Component, Inject, OnInit, Optional} from '@angular/core';
import {LoggerService} from './logger.service';
import {localstorageToken} from './localstorage.token';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{


  constructor(@Optional() private loggerService: LoggerService,
              @Inject(localstorageToken) private localStorage:Storage,private router:Router ) {





  }

  ngOnInit(): void {

    this.localStorage.setItem('name','hilton hotel')

    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationStart),
    ).subscribe((event:any) => {
      console.log('started');
    })

    }


  title = 'inventoryManagement';
}
