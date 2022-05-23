import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router, private constants: ConstantsService
  ) { }

  ngOnInit() {
  }

}
