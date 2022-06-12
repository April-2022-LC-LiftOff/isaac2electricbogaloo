import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../register/registerUser";


@Injectable({
  providedIn: "root",
})
export class UserPumpkinsService {

  constructor(private http: HttpClient) {}

  getUserPumpkins(): Observable<User> {
    return this.http.get<User>(
      "http://localhost:8080/api/user/pumpkins"
    )
  }

}
