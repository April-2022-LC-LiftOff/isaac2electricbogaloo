import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core"
import { Router, NavigationEnd } from "@angular/router";
import { Pet } from "./pet";
import { PetService } from "./pet.service";
import {ToDo} from '../toDo/toDo';
import { ToDoService } from '../toDo/toDo.service';
import { UserPumpkinsService } from '../user-pumpkins/user-pumpkins.service';
import {User} from '../register/registerUser';


@Component({
  selector: "app-pet",
  templateUrl: "./pet.component.html",
  styleUrls: ["./pet.component.css"],
})
export class PetComponent implements OnInit {
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
    const petObservable = this.petService.getPet();
         petObservable.subscribe((petData: Pet) => {
             this.pet = petData;
             document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel*10}%`);
             console.log(`this pet: ${JSON.stringify(this.pet)}`);
         });
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

    ngOnDestroy() {
      if (this.someSubscription) {
        this.someSubscription.unsubscribe();
      }
    }
  
  feedPet(): void {
  if(this.user.pumpkins >= 0){
    if(this.pet.hungerLevel<10) {
          this.pet.hungerLevel += 1;
        document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel*10}%`);
        this.pet.mood = this.setMood(this.pet.hungerLevel);
        console.log(`this pet just before sending: ${JSON.stringify(this.pet)}`);
        this.user.pumpkins -= 1;
        this.petService.feed(this.pet)
          .subscribe(
            response => {
              console.log(`this pet was subscribed: ${JSON.stringify(response)}`);
              this.router.navigate(['dashboard']);
            }
          )
        }
        else {
                  console.log(`ELSE this pet: ${JSON.stringify(this.pet)}`);
                  this.router.navigate(['dashboard']);
                }
  }

    
  }

  setMood(hungerLevel: number): string {
    let mood = "";
    if(hungerLevel < 1) {
      mood = "Not so good"
    }
    else if (hungerLevel < 3) {
      mood = "Brighter days are ahead"
    }
    else if (hungerLevel < 5) {
      mood = "Chilling"
    }
    else if (hungerLevel < 8) {
      mood = "Feeling GREAT"
    }
    else if (hungerLevel <=10) {
      mood = "This is PERFECT"
    }
    return mood;
  }

}
