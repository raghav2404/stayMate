import {Directive, ElementRef, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() color:string = 'red'


  constructor(private element:ElementRef) {
    console.log(this.element.nativeElement
    );
  }

  ngOnInit(): void {
   this.element.nativeElement.style.backgroundColor =  this.color;
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.element.nativeElement.style.backgroundColor = 'green';
    }
    @HostListener('mouseleave') onMouseLeave()
       {
        this.element.nativeElement.style.backgroundColor = 'white' ;
      }







































}
