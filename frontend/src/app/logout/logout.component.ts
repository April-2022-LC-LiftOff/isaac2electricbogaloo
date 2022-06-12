import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ConstantsService } from "../constants.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"],
})
export class LogoutComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private constants: ConstantsService,
    private router: Router
  ) {}

  ngOnInit() {}

  logOut(): void {
    console.log("Logging out.");

    const newLocal: Observable<void> = this.http.post<void>(
      this.constants.getRootURL() + "/logout",
      null
    );

    newLocal.subscribe(
      () => {
        console.log("Logged out.");
        this.router.navigate(["signin"]);
      },
      (error) => {
        console.error("Error getting user " + JSON.stringify(error));
      }
    );
  }
}
