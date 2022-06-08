import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'; 
import { ToDo } from './toDo';
import { ToDoService } from './toDo.service';

@Component({
  selector: 'app-toDo',
  templateUrl: './toDo.component.html',
  styleUrls: ['./toDo.component.css']
})
export class ToDoComponent implements OnInit {

  toDo: ToDo = {
    description: "",
    dayToDo: "",
    timeToDo: "",
    completed: false,
  } 
  
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

  constructor(private router: Router, private toDoService: ToDoService) { }

  
  ngOnInit():void {
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
