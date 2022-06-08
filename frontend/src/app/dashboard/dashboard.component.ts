import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToDo} from '../toDo/toDo';
import { ToDoService } from '../toDo/toDo.service';

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


  constructor(
    private http: HttpClient,
    private toDoService: ToDoService,
    private router: Router,

  ) { }

  ngOnInit() {
    const toDosObservable = this.toDoService.getAllToDos();
         toDosObservable.subscribe((toDosData: ToDo[]) => {
             this.toDos = toDosData;
             console.log(`toDo completed: ${JSON.stringify(this.toDos[0].completed)}`);
         });
  }

  setActiveToDo(toDo, index): void {
    this.currentToDo = toDo;
    this.currentIndex = index;
  }

  completeToDo(toDo: ToDo) {
    this.toDoService.complete(toDo)
    .subscribe(
        (response) => {
            console.log(`toDo completed: ${JSON.stringify(response)}`);
        }
    )
  }
}
