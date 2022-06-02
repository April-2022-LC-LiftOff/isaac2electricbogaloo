import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { SigninUser } from './signinUser';
import { SigninService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
signinUser: SigninUser= {
    email: "",
    password: ""
    }
  constructor(private router: Router, private signinService: SigninService) { }

  ngOnInit() {
  }
  onClickSubmit(): void {
    this.signinService.signinUser(this.signinUser).subscribe(
      (savedUser) => {
        console.log(`user saved: ${JSON.stringify(savedUser)}`);
        this.router.navigate(["home"]);
      },
      (e) => {
        console.error("Error adding user " + JSON.stringify(e));
      }
    );
    }
}
