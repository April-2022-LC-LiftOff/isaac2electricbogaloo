import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {ToDo} from '../toDo/toDo';
import { ToDoService } from '../toDo/toDo.service';
import { UserPumpkinsService } from '../user-pumpkins/user-pumpkins.service';
import {User} from '../register/registerUser';
import { Pet } from "../pet/pet";
import { PetService } from "../pet/pet.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   toDos: ToDo[] = [];

   toDo: ToDo = {
      description: "",
      dayToDo: "",
      timeToDo: "",
      completed: false,
     } ;

  currentToDo = null;
  currentIndex = -1;

  user: User = {
    email: "",
    password: "",
    confirmPassword: "",
    type: "",
    pumpkins: 0,
  }

  pet = {
      type: "Panda",
      hungerLevel: 5,
      mood: "Chilling",
    };

  elem;

  someSubscription: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toDoService: ToDoService,
    private userPumpkinsService: UserPumpkinsService,
    private petService: PetService,

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
    const toDosObservable = this.toDoService.getAllToDos();
         toDosObservable.subscribe((toDosData: ToDo[]) => {
             this.toDos = toDosData;
             console.log(`toDo completed: ${JSON.stringify(this.toDos[0].completed)}`);
         });
    const userObservable = this.userPumpkinsService.getUserPumpkins();
             userObservable.subscribe((userData: User) => {
                 this.user = userData;
                 console.log(`current pumpkins: ${JSON.stringify(this.user.pumpkins)}`);
             });
    const petObservable = this.petService.getPet();
         petObservable.subscribe((petData: Pet) => {
             this.pet = petData;
             document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel*10}%`);
             console.log(`this pet: ${JSON.stringify(this.pet)}`);
         });
  }

    ngOnDestroy() {
      if (this.someSubscription) {
        this.someSubscription.unsubscribe();
      }
    }

  setActiveToDo(toDo, index): void {
    this.currentToDo = toDo;
    this.currentIndex = index;
  }

  completeToDo(toDo: ToDo) {
    this.toDo.completed = true;
    this.toDoService.complete(toDo)
    .subscribe(
        (response) => {
            console.log(`toDo completed: ${JSON.stringify(response)}`);
            this.router.navigate(["/dashboard"]);
        }
    )
  }
}
