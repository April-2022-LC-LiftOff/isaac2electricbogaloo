import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoComponent } from './toDo/toDo.component';
import { SettingsComponent } from './settings/settings.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetComponent } from './pet/pet.component';
import { LogoutComponent } from './logout/logout.component';
import { UserPumpkinsComponent } from './user-pumpkins/user-pumpkins.component';




@NgModule({
  declarations: [
    AppComponent, HomePageComponent, RegisterComponent, NavbarComponent, FooterComponent, SignInComponent, ToDoComponent, SettingsComponent, PomodoroComponent, DashboardComponent, PetComponent, LogoutComponent, UserPumpkinsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
