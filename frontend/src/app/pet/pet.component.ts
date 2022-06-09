import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router";
import { Pet } from "./pet";
import { PetService } from "./pet.service";


@Component({
  selector: "app-pet",
  templateUrl: "./pet.component.html",
  styleUrls: ["./pet.component.css"],
})
export class PetComponent implements OnInit {
  pet = {
    petType: "Panda",
    hungerLevel: 5,
    mood: "Chilling",
  };

  elem;


  constructor(
    private http: HttpClient,
    private petService: PetService,
    private router: Router,
  ) {}

  ngOnInit() {
    const petObservable = this.petService.getPet();
         petObservable.subscribe((petData: Pet) => {
             this.pet = petData;
             document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel*10}%`);
             console.log(`this pet: ${JSON.stringify(this.pet)}`);
         });

    
  }
  
  feedPet(): void {
    if(this.pet.hungerLevel<10) {
      this.pet.hungerLevel += 1;
    document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel*10}%`);
    this.pet.mood = this.setMood(this.pet.hungerLevel);
    this.petService.feed(this.pet)
      .subscribe(
        response => {
          this.router.navigate(['pet']);
        }
      )
    } else {
      this.router.navigate(['pet']);
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
