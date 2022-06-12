import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ToDoComponent } from './toDo/toDo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';

const routes: Routes = [

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'todo', component: ToDoComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'pomodoro', component: PomodoroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
