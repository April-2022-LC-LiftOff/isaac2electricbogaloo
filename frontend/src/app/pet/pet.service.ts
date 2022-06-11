import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pet } from "./pet";


@Injectable({
  providedIn: "root",
})
export class PetService {

  constructor(private http: HttpClient) {}

  getPet(): Observable<Pet> {
    return this.http.get<Pet>(
      "http://localhost:8080/api/pet"
    )
  }

  feed(pet: Pet): Observable<any> {
    return this.http.put("http://localhost:8080/api/pet/feed", pet);
  }

}