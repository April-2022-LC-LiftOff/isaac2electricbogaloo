import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ToDo } from "./toDo";
import { ConstantsService } from "../constants.service";


@Injectable({
  providedIn: "root",
})
export class ToDoService {

  constructor(private http: HttpClient, private constants: ConstantsService) {}

  addToDo(toDo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(
      "http://localhost:8080/api/todo",
      toDo
    );
  }

  getAllToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(
      "http://localhost:8080/api/todos"
    )
  }

  complete(toDo: ToDo): Observable<any> {
    return this.http.put("http://localhost:8080/api/todos/complete", toDo);

  }
}
