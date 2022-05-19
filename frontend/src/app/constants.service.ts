import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConstantsService {
  constructor() {}

  getRootURL(): String {
    return "http://localhost:8080/api";
  }
}
