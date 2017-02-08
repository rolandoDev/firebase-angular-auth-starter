import { Component, OnInit } from '@angular/core';
import {
  AngularFire
} from 'angularfire2'
import {
  Router
} from '@angular/router';
import {
  GlobalEventsService
} from '../services/global-events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
showNavBar: boolean = false;
  badge: number;
  public toggled: boolean = false;
  constructor(public af: AngularFire, public router: Router, private globalEventsManager: GlobalEventsService) { 
  }

  ngOnInit() {
    //Si el usuario esta sesionado muestra el MENU
    this.af.auth.subscribe((user) => {
      if (user) this.globalEventsManager.showNavBar(true);
    })
      //Escucha el evento para mostrar el MENU
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
      if (mode !== null) {
        this.showNavBar = mode;
      }
    });
  }
  logout() {
    if (window.confirm("¿Deseas cerrar tu sesión?")) {
      this.af.auth.logout();
      this.af.auth.subscribe(() => {
        this.globalEventsManager.showNavBar(false);
        this.router.navigate(['/login']);
      })
    }
  }
  toggle() {
    this.toggled = !this.toggled;
  }

}
