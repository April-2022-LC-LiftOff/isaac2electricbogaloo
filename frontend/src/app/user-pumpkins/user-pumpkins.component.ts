import { Component, OnInit } from '@angular/core';
import { UserPumpkinsService } from './user-pumpkins.service';
import {User} from '../register/registerUser';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-pumpkins',
  templateUrl: './user-pumpkins.component.html',
  styleUrls: ['./user-pumpkins.component.css']
})
export class UserPumpkinsComponent implements OnInit {

  user: User = {
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
    pumpkins: 0,
  }

  someSubscription: any;

  constructor(
    private http: HttpClient,
    private userPumpkinsService: UserPumpkinsService,
    private router: Router,
  ) {
   this.router.routeReuseStrategy.shouldReuseRoute = function () {
       return false;
     };
     this.someSubscription = this.router.events.subscribe((event) => {
       if (event instanceof NavigationEnd) {
         // Here is the dashing line comes in the picture.
         // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
         this.router.navigated = false;
       }
     });
   }

  ngOnInit() {
    const userObservable = this.userPumpkinsService.getUserPumpkins();
         userObservable.subscribe((userData: User) => {
             this.user = userData;
             console.log(`current pumpkins: ${JSON.stringify(this.user.pumpkins)}`);
         });
  }

    ngOnDestroy() {
      if (this.someSubscription) {
        this.someSubscription.unsubscribe();
      }
    }
}

