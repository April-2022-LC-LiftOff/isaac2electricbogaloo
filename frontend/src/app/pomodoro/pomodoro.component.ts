


import { Component, OnInit } from '@angular/core';
import{trigger,state,style,animate,transition} from '@angular/animations'
// import { countReset } from 'console';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css'],
  animations: [
    trigger('pageNumber',[
    state('one', style({
      transform: 'translateX(-0%)',
    })),
    state('two', style({
      transform: 'translateX(-33.3%)',

    })),
    state('three', style({
      transform: 'translateX(-66.6%)',
    })),
    transition('* <=> *',[
      animate('500ms ease')

    ])
])
  ]
})


export class PomodoroComponent implements OnInit {
pageNumber = 'one'
workDuration = 25
breakDuration = 5
message = 'Get to work!'
minutes = this.workDuration -1
seconds = 60
interval: any = 0

toggle(pageNumber: string){
  this.pageNumber = pageNumber;
}
increaseFocusTime(){
  this.workDuration += 1
  this.minutes =this.workDuration -1
  
}
decreaseFocusTime(){
  this.workDuration -= 1
  this.minutes =this.workDuration -1
  
}
increaseBreakTime(){
  this.breakDuration += 1
 
  
}
decreaseBreakTime(){
  this.breakDuration -= 1
  
  
}

start(){
  this.playWork();
  this.interval = setInterval(()=> counter(),1000)
const counter =()=>{
if(this.message=="Break Time" && this.minutes==0 && this.seconds==0){
  this.message = "Get to work!";
  this.playWork();
  this.minutes = this.workDuration;
  this.seconds = 0;
}
else if(this.minutes == 0 && this.seconds==0){
  this.message = "Great job";
  this.minutes = this.breakDuration;
  this.seconds = 0;
  this.message = "Break Time";
  this.playGood();
}
else if(this.seconds == 0){
  this.seconds=59;
  this.minutes --
}
else{
  this.seconds --
}

};

}
stop() {
clearInterval(this.interval);

};

playGood() {
let audio = new Audio();
audio.src = "../../assets/GoodJob.wav";
audio.load();
audio.play();
}

playWork() {
let audio = new Audio();
audio.src = "../../assets/GetToWork.wav";
audio.load();
audio.play();
}

  constructor() { }

  ngOnInit() {
  }

}
