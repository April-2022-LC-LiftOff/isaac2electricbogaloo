import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./registerUser";


@Injectable({
  providedIn: "root",
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>(
      "http://localhost:8080/api/register",
      user
    );
  }
}

