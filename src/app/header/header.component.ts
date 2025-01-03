import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

title:string = ''

  constructor() {
  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }





}
