import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router'; 
import {User} from './registerUser';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    email: "",
    password: "",
    confirmPassword: "",
    pet: ""
  }

  pets = ["Panda", "Racoon"];

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit():void {
  }

  onClickSubmit(): void {
    this.registerService.addUser(this.user).subscribe(
      (savedUser) => {
        console.log(`user signed in: ${JSON.stringify(savedUser)}`);
        this.router.navigate(["/toDo"]);
      },
      (e) => {
        console.error("Error adding user " + JSON.stringify(e));
      }
    );
  }


}
