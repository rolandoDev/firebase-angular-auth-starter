import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { GlobalEventsService } from '../services/global-events.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
  password: string;
  message: string;
  loading:boolean;
  logged:Boolean;
  constructor(public af: AngularFire, public router: Router, private globalEventsManager: GlobalEventsService) {
    this.logged=false;
  }

  ngOnInit() {
    this.loading=true;
    this.af.auth.subscribe((user) => {
      this.loading=false;
      console.log('USER',user);
      
      if(user){
        this.globalEventsManager.showNavBar(true);
        this.router.navigate(['/home']);
      } 
    })
  }
  login() {
    this.loading=true;
    this.message = null;
    
    
    this.af.auth.login({
      email: this.email,
      password: this.password,
    }).then(
      (success) => {
        console.log(this.email+' '+this.password);
        this.loading=false;
        this.globalEventsManager.showNavBar(true);
        this.router.navigate(['/home']);
      }).catch(
      (err:any) => {
        this.loading=false;
        switch (err.code) {
          case 'auth/invalid-email':
            this.message = 'La dirección de correo electrónico está mal formateada.';
            break;
          case 'auth/user-not-found':
            this.message = 'El usuario no se encuentra.';
            break;
            case 'auth/wrong-password':
            this.message = 'La contraseña es incorrecta.';
            break;
          default:
          this.message = err.message;
            break;
        }
        console.log(err);
      })

  }
}
