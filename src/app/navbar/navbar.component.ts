import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({transform: 'translateY(-4em)'}),
        animate('.5s 1s ease'),
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {
  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}