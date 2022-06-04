import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ToDo } from "./toDo";


@Injectable({
  providedIn: "root",
})
export class ToDoService {

  constructor(private http: HttpClient) {}

  addToDo(toDo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(
      "http://localhost:8080/api/todo",
      toDo
    );
  }
}
