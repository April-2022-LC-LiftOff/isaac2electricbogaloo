import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import { ToDo } from './toDo';
import { ToDoService } from './toDo.service';
import { Pet } from "../pet/pet";
import { PetService } from "../pet/pet.service";
import { UserPumpkinsService } from '../user-pumpkins/user-pumpkins.service';
import {User} from '../register/registerUser';

@Component({
  selector: 'app-toDo',
  templateUrl: './toDo.component.html',
  styleUrls: ['./toDo.component.css']
})
export class ToDoComponent implements OnInit {

    pet = {
      type: "Panda",
      hungerLevel: 5,
      mood: "Chilling",
    };

    elem;

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
      };

      someSubscription: any;
  
  date = {
    year: "",
    month: "",
    day: "" 
  };
  
  years = ["2022", "2023", "2024"];

  months = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
          "24", "25", "26", "27", "28", "29", "30", "31"];


  time = {
    hour: "",
    minute: "",
    dayOrNight: ""
  };

  hours = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];

  minutes = ["00", "15", "30", "45"];

  dayOrNights = ["AM", "PM"];


  constructor(
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

  
  ngOnInit():void {
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
  }

  onClickSubmit(): void {
    this.toDo.dayToDo =  this.date.year + "-" + this.date.month + "-" + this.date.day;
    console.log(`toDo day inputted: ${JSON.stringify(this.toDo.dayToDo)}`);
    if (this.time.dayOrNight == "PM" && this.time.hour != "12") {
      this.time.hour = (Number(this.time.hour) + 12).toString();
    };
    this.toDo.timeToDo = this.time.hour + ":" + this.time.minute + ":00";
    this.toDoService.addToDo(this.toDo).subscribe(
      (savedToDo) => {
        console.log(`toDo added: ${JSON.stringify(savedToDo)}`);
        this.router.navigate(["/dashboard"]);
      },
      (e) => {
        console.error("Error adding ToDo " + JSON.stringify(e));
      }
    );
  }

}

