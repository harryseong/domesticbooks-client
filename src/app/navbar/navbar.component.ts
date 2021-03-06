import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {SidenavService} from '../../shared/services/sidenav/sidenav.service';
import {UserService} from '../../shared/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('transitionAnimations', [
      transition(':enter', [
        style({transform: 'translateY(-4em)'}),
        animate('0.5s ease'),
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {
  @Input()
  title: string;

  constructor(private sidenavService: SidenavService, public userService: UserService) { }

  ngOnInit() {
  }

  openSidenav() {
    this.sidenavService.openSidenav();
  }
}
