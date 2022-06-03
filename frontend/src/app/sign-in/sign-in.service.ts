import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SigninUser } from "./signinUser";


@Injectable({
  providedIn: "root",
})
export class SigninService {

  constructor(private http: HttpClient) {}

  signinUser(signinUser: SigninUser): Observable<SigninUser> {
    return this.http.post<SigninUser>(
      "http://localhost:8080/api/signin",
      signinUser
    );
  }
}
