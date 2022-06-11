(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!-- <h1>Panda Planner</h1> -->\n\n\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-pet></app-pet>\n<app-user-pumpkins></app-user-pumpkins>\n\n\n<div id=\"bg\">\n    <img src=\"https://drive.google.com/uc?export=view&id=1QG2nWFfnHn1JVosz_VIdd7O5zwB_dF-A\" alt=\"\">\n</div>\n<div class=\"addToDo-button\">\n    <button type=\"button\" routerLink=\"/todo\" class=\"btn btn-secondary btn-lg\">Add ToDo</button>\n</div>\n\n<div class=\"todo-container\">\n<div *ngFor=\"let toDo of toDos; let i = index\" [class.active]=\"i == currentIndex\" (mouseover)=\"setActiveToDo(toDo, i)\">\n    <div class=\"todo-wrapper\" id=\"{{toDo.id}}\">\n        <p>Description: {{toDo.description}}</p>\n        <p>Day: {{toDo.dayToDo}}</p>\n        <p>Time: {{toDo.timeToDo}}</p>\n\n        <button *ngIf=\"!toDo.completed\" type=\"button\" (click)=\"completeToDo(toDo)\">Completed</button>\n\n\n    </div>\n</div>\n</div>\n\n\n<router-outlet></router-outlet> \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"footer\">\n<div class=\"row\">\n<div class=\"col-lg-6\">\n    <h1>Copyright © 2022 PANDA. All rights reserved.</h1>\n   \n</div>\n<div class=\"media\">\n<div class=\"col-lg-2\">\n    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-youtube\"></i></a>\n    \n</div>\n</div>\n</div>\n\n</div>\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n <app-navbar></app-navbar>\n<div class=\"banner\">\n    <div class= \"content\">\n       <div class=\"textbox\">\n       <h2><br><span>The only planner made with your mind in mind!</span> </h2>\n    <p>If you have difficulty managing your time or following through on plans, you are not alone. \n       Many people with ADHD find that a combination of weak organizational skills, poor time management, \n       add up to lost time and incomplete projects and plans, at both work and home.Panda planner can be an important tool, \n       a place to keep short-term and long-term schedules.</p><div class=\"sign-up-button\">\n      \n         <a href=\"#\" routerLink=\"/register\" class=\"btn\">SIGN UP</a>\n    </div>\n</div> \n</div>\n</div>\n<div class=\"banner1\">\n \n <ul class=\"thumb\">\n\n        <li><img src=\"../../assets/img/1.png\"/><BR><h1> When you choose a pet it will depend on you to stay focused.</h1></li>\n      <li> <img src=\"../../assets/img/2.png\" /><BR><h1> Customize PANDA'S pomodoro timer to help you stay on task.</h1></li>\n        <li><img src=\"../../assets/img/3.png\" /><BR><h1> Everytime you complete a task your pet gets a pumpkin! </h1></li>\n </ul>\n         </div>\n   \n         <div class=\"banner2\">\n            <div class=\"textbox2\">\n            <img src=\"../../assets/img/adhdp.gif\"/>\n            <!-- <p>If you've used a planner in the past and it didn't seem to help, <br>don't be afraid to try again. \n               PANDA is all about creating new habits. <br>You might find it useful to think of your pet as an <br>accountibility partner.\n               Start by checking your planner no fewer than three<br> times a day: once in the morning as you are looking ahead to your day, \n               <br>once around midday, and once in the evening to review and plan the next day. <br>Doing so will keep you getting things done and your pet happy!</p> -->\n         </div>\n         </div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button\n  type=\"button\"\n  role=\"link\"\n  (click)=\"logOut()\"\n  alt=\"Log out of Profile\"\n>Logout</button> -->\n<a class=\"nav-link\"\n routerLink=\"/signin\"\n routerLinkActive= \"active-link\"\n role=\"link\"\n (click)=\"logOut()\"\n alt=\"Log out of Profile\">logout</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<nav class= \"navbar navbar-expand-lg navbar-light bg-light\"><img src=\"../../assets/img/navlogo.png\"routerLink=\"/home\"style=\"width:5em; height:5X em ;\" />\n  \n  <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\"routerLinkActive= \"active-link\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\"routerLinkActive= \"active-link\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/pomodoro\"routerLinkActive= \"active-link\">Pomodoro</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/signin\"routerLinkActive= \"active-link\">sign in</a>\n    </li>\n    <app-logout></app-logout> \n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/footer\"routerLinkActive= \"active-link\"><i class=\"fa fa-gear\"></i></a>\n        \n      </li>\n      \n  </ul>\n</nav>\n\n\n\n<router-outlet></router-outlet> \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pet/pet.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pet/pet.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"this.pet\">\n  <div class=\"progress\">\n    <div\n      class=\"progress-bar\"\n      role=\"progressbar\"\n      id=\"progress-bar\"\n      aria-valuenow=\"25\"\n      aria-valuemin=\"0\"\n      aria-valuemax=\"100\"\n    >\n      {{this.pet.hungerLevel*10}}%\n    </div>\n  </div>\n  <div>\n    <button type=\"button\" (click)=\"feedPet()\">+</button>\n  </div>\n\n  <div>\n    <h3>Your {{this.pet.type}}'s Mood: {{this.pet.mood}}</h3>\n</div>\n</ng-container>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pomodoro/pomodoro.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pomodoro/pomodoro.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-navbar></app-navbar>\n<div class=\"banner\">\n\n\n<div class=\"card\">\n    <section class=\"position\" [@pageNumber]=\"pageNumber\">\n    \n        <div class=\"flex\">\n        <h1 class=\"title\">FOCUS TIME</h1>\n        <div class=\"counter\">\n         <button (click)=\"decreaseFocusTime()\"type=\"button\">-</button>\n        <div>{{workDuration}}</div>\n        <button (click)=\"increaseFocusTime()\"type=\"button\">+</button>\n    </div>\n     <button (click)=\"toggle('two')\" type=\"button\">NEXT</button>\n</div>\n\n<div class=\"flex\">\n    <h1 class=\"title\">SHORT BREAK</h1>\n    <div class=\"counter\">\n     <button (click)=\"decreaseBreakTime()\"type=\"button\">-</button>\n    <div>{{breakDuration}}</div>\n    <button (click)=\"increaseBreakTime()\"type=\"button\">+</button>\n</div>\n<div class=\"buttons\">\n <button (click)=\"toggle('three')\"type=\"button\">NEXT</button>\n <button (click)=\"toggle('one')\"type=\"button\">BACK</button>\n</div>\n</div>\n\n<div class=\"flex\">\n    <h1 class=\"title\">{{message}}</h1>\n    <div class=\"counter\">\n    <div>{{minutes}}:{{seconds}}</div>\n    </div>\n    <div class=\"buttons\">\n        <button (click)=\"toggle('two')\"type=\"button\">BACK</button>\n        <button (click)= \"start()\"type=\"button\">START</button>\n        <button (click)= \"stop()\"type=\"button\">STOP</button>\n</div>\n</div>\n</section>\n\n</div>\n</div>\n\n <app-footer></app-footer>\n\n<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<a class=\"navbar-brand\" routerLink=\"/home\"> <img src=\"../../assets/img/navlogo.png\"alt=\"logo\" style=\"width:4em; height:4em;\" /></a>\n<div id=\"bg\">\n    <img src=\"../../assets/img/regbg.png\" alt=\"\">\n</div>\n\n    <div id=\"bg\">\n        <img src=\"../../assets/img/regbg.png\" alt=\"\">\n    </div>\n\n        <div class=\"container\">\n        <form class=\"form\"\n            #form=\"ngForm\"\n            method=\"post\"\n            action=\"register\"\n            (ngSubmit)=\"onClickSubmit()\"\n        >\n            <h1>CREATE ACCOUNT</h1>\n            <h2> Get 10 points when you sign up today! </h2>\n\n            <label for=\"email\" class=\"form-label\">Email</label>\n            <input type=\"email\"\n                   placeholder=\"Email address\"\n                   action=\"register\"\n                   class=\"form-control\"\n                   id=\"email\"\n                   name=\"email\"\n                   [(ngModel)]=\"user.email\"\n                   required\n            >\n            <label for=\"password\" class=\"form-label\">Password</label>\n            <input\n            type=\"password\"\n            placeholder=\"Password\"\n            action=\"register\"\n            class=\"form-control\"\n            id=\"password\"\n            name=\"password\"\n            [(ngModel)]=\"user.password\"\n            required\n            >\n            <label for=\"confirmPassword\" class=\"form-label\">Confirm Password</label>\n            <input\n            type=\"password\"\n            placeholder=\"Password\"\n            action=\"register\"\n            class=\"form-control\"\n            id=\"confirmPassword\"\n            name=\"confirmPassword\"\n            [(ngModel)]=\"user.confirmPassword\"\n            required\n            >\n            <label>Select Your Pet:</label>\n                <select\n                        name=\"type\"\n                        [(ngModel)]=\"user.type\"\n                        required\n                >\n                    <option *ngFor=\"let p of pets\">\n                        {{ p }}\n                    </option>\n                </select>\n            <h3>Already a member?<a href=\"#\" class=\"link-primary\" routerLink=\"/signin\" id class=\"signup\" >Sign in</a></h3>\n\n            <div class=\"btn-box\">\n                <button type=\"submit\"class=\"btn btn-primary\">Submit</button>\n            </div>\n\n\n</form>\n    </div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>settings works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in/sign-in.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <a class=\"navbar-brand\" routerLink=\"/home\"> <img src=\"../../assets/img/navlogo.png\"style=\"width:4em; height:4em;\" /></a>\n    <div id=\"bg\">\n        <img src=\"../../assets/img/bgsi.png\" alt=\"\">\n    </div>\n   \n    <div class=\"container\">\n        <form\n                #form=\"ngForm\"\n                method=\"post\"\n                action=\"signin\"\n                (ngSubmit)=\"onClickSubmit()\"\n        >\n\n\n            <h1>WELCOME BACK!</h1>\n            <h2>Stay focused, go after your dreams and keep moving toward your goals!</h2>\n        <label for=\"email\" class=\"form-label\"></label>\n            <input type=\"text\"\n                   placeholder=\"Email address\"\n                   class=\"form-control\"\n                   id=\"email\"\n                   name=\"email\"\n                   [(ngModel)]=\"signinUser.email\"\n                   required\n            />\n            <label for=\"password\" class=\"form-label\"></label>\n            <input\n                    type=\"password\"\n                    placeholder=\"Password\"\n                    class=\"form-control\"\n                    id=\"password\"\n                    name=\"password\"\n                    [(ngModel)]=\"signinUser.password\"\n                    required\n            />\n\n            <a href=\"#\" class=\"link-primary\">Forgot Password</a>\n            <div class =\"sgn-btn\">\n                <br><h3>No account?<a href=\"#\" class=\"link-primary\" routerLink=\"/register\" id class=\"signup\" >Sign up</a></h3>\n            </div>\n\n            <div class=\"btn-box\">\n                <button type=\"submit\" routerLink=\"/dashboard\" class=\"btn btn-primary\">Sign in</button>\n            </div>\n        </form>\n    </div>\n    \n    \n    <router-outlet></router-outlet>\n\n\n\n  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toDo/toDo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toDo/toDo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n\n<div id=\"bg\">\n    <img src=\"https://drive.google.com/uc?export=view&id=1QG2nWFfnHn1JVosz_VIdd7O5zwB_dF-A\" alt=\"\">\n</div>\n\n\n\n\n<div class=\"container\">\n    <h2>Add a task</h2>\n  <form\n    class=\"form\"\n    #form=\"ngForm\"\n    method=\"post\"\n    action=\"createToDo\"\n    (ngSubmit)=\"onClickSubmit()\"\n  >\n    <div>\n      <label for=\"description\" class=\"form-label\"\n        >What do you want to do?</label\n      >\n      <input\n        type=\"text\"\n        placeholder=\"Description...\"\n        class=\"form-control\"\n        id=\"description\"\n        name=\"description\"\n        [(ngModel)]=\"toDo.description\"\n        required\n      />\n    </div>\n    <div>\n      <label for=\"dayToDo\">Choose a day</label>\n\n      <select name=\"month\" id=\"month\" [(ngModel)]=\"date.month\">\n        <option *ngFor=\"let mon of months\">{{ mon }}</option>\n      </select>\n\n      <select name=\"day\" id=\"day\" [(ngModel)]=\"date.day\">\n        <option *ngFor=\"let d of days\">{{ d }}</option>\n      </select>\n\n      <select name=\"year\" id=\"year\" [(ngModel)]=\"date.year\">\n        <option *ngFor=\"let yr of years\">{{ yr }}</option>\n      </select>\n    </div>\n\n    <div>\n      <label for=\"timeToDo\">Choose a time</label>\n\n      <select name=\"hour\" id=\"hour\" [(ngModel)]=\"time.hour\">\n        <option *ngFor=\"let hr of hours\">{{ hr }}</option>\n      </select>\n\n      <select name=\"minute\" id=\"minute\" [(ngModel)]=\"time.minute\">\n        <option *ngFor=\"let min of minutes\">{{ min }}</option>\n      </select>\n\n      <select name=\"dayOrNight\" id=\"dayOrNight\" [(ngModel)]=\"time.dayOrNight\">\n        <option *ngFor=\"let dN of dayOrNights\">{{ dN }}</option>\n      </select>\n    </div>\n\n    <div class=\"btn-box\">\n      <button type=\"submit\" class=\"btn btn-secondary btn-lg\">Create</button>\n    </div>\n  </form>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-pumpkins/user-pumpkins.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-pumpkins/user-pumpkins.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ng-container *ngIf=\"this.user\">-->\n    <div>\n        <p>You have {{this.user.pumpkins}} pumpkins</p>\n    </div>\n<!--</ng-container>-->\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _toDo_toDo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toDo/toDo.component */ "./src/app/toDo/toDo.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pomodoro/pomodoro.component */ "./src/app/pomodoro/pomodoro.component.ts");











const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'nav', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"] },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
    { path: 'todo', component: _toDo_toDo_component__WEBPACK_IMPORTED_MODULE_8__["ToDoComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: 'pomodoro', component: _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_10__["PomodoroComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import {FormGroup, FormControl} from '@angular/forms';
let AppComponent = class AppComponent {
    // import {FormGroup, FormControl} from '@angular/forms';
    constructor() {
        this.title = 'panda-planner-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _toDo_toDo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toDo/toDo.component */ "./src/app/toDo/toDo.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pomodoro/pomodoro.component */ "./src/app/pomodoro/pomodoro.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _pet_pet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pet/pet.component */ "./src/app/pet/pet.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _user_pumpkins_user_pumpkins_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-pumpkins/user-pumpkins.component */ "./src/app/user-pumpkins/user-pumpkins.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"], _toDo_toDo_component__WEBPACK_IMPORTED_MODULE_13__["ToDoComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"], _pomodoro_pomodoro_component__WEBPACK_IMPORTED_MODULE_15__["PomodoroComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], _pet_pet_component__WEBPACK_IMPORTED_MODULE_17__["PetComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["LogoutComponent"], _user_pumpkins_user_pumpkins_component__WEBPACK_IMPORTED_MODULE_19__["UserPumpkinsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/constants.service.ts":
/*!**************************************!*\
  !*** ./src/app/constants.service.ts ***!
  \**************************************/
/*! exports provided: ConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantsService", function() { return ConstantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConstantsService = class ConstantsService {
    constructor() { }
    getRootURL() {
        return "http://localhost:8080/api";
    }
};
ConstantsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ConstantsService);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif\n}\n\nbody{\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    padding:0px;\n}\n\n#bg {\n    position: fixed; \n    top: -50%; \n    left: -50%; \n    width: 200%; \n    height: 200%;\n    z-index: -1;\n  }\n\n#bg img {\n    position: absolute; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0; \n    margin: auto; \n    min-width: 50%;\n    min-height: 50%;\n  }\n\n.todo-container {\n  width: 360px;\n  height: 600px;\n  margin: 8% auto;\n  background: white;\n  border-radius: 15px;\n  position: relative;\n  margin-right: 42%;\n  margin-top: 6%;\n}\n\n.todo-wrapper {\ndisplay: inline-block;\nwidth: 150px;\nborder: 2px solid black;\npadding: 15px;\nmargin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFHQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBTUY7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYixZQUFZO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzowcHg7XG59XG5cblxuI2JnIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHRvcDogLTUwJTsgXG4gICAgbGVmdDogLTUwJTsgXG4gICAgd2lkdGg6IDIwMCU7IFxuICAgIGhlaWdodDogMjAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAjYmcgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDsgXG4gICAgcmlnaHQ6IDA7IFxuICAgIGJvdHRvbTogMDsgXG4gICAgbWFyZ2luOiBhdXRvOyBcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG4gIH1cblxuXG5cblxuXG4udG9kby1jb250YWluZXIge1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogOCUgYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiA0MiU7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG4udG9kby13cmFwcGVyIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbndpZHRoOiAxNTBweDtcbmJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xucGFkZGluZzogMTVweDtcbm1hcmdpbjogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _toDo_toDo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDo/toDo.service */ "./src/app/toDo/toDo.service.ts");
/* harmony import */ var _user_pumpkins_user_pumpkins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-pumpkins/user-pumpkins.service */ "./src/app/user-pumpkins/user-pumpkins.service.ts");
/* harmony import */ var _pet_pet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pet/pet.service */ "./src/app/pet/pet.service.ts");







let DashboardComponent = class DashboardComponent {
    constructor(http, router, toDoService, userPumpkinsService, petService) {
        this.http = http;
        this.router = router;
        this.toDoService = toDoService;
        this.userPumpkinsService = userPumpkinsService;
        this.petService = petService;
        this.toDos = [];
        this.toDo = {
            description: "",
            dayToDo: "",
            timeToDo: "",
            completed: false,
        };
        this.currentToDo = null;
        this.currentIndex = -1;
        this.user = {
            email: "",
            password: "",
            confirmPassword: "",
            type: "",
            pumpkins: 0,
        };
        this.pet = {
            type: "Panda",
            hungerLevel: 5,
            mood: "Chilling",
        };
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.someSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Here is the dashing line comes in the picture.
                // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
                this.router.navigated = false;
            }
        });
    }
    ngOnInit() {
        const toDosObservable = this.toDoService.getAllToDos();
        toDosObservable.subscribe((toDosData) => {
            this.toDos = toDosData;
            console.log(`toDo completed: ${JSON.stringify(this.toDos[0].completed)}`);
        });
        const userObservable = this.userPumpkinsService.getUserPumpkins();
        userObservable.subscribe((userData) => {
            this.user = userData;
            console.log(`current pumpkins: ${JSON.stringify(this.user.pumpkins)}`);
        });
        const petObservable = this.petService.getPet();
        petObservable.subscribe((petData) => {
            this.pet = petData;
            document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel * 10}%`);
            console.log(`this pet: ${JSON.stringify(this.pet)}`);
        });
    }
    ngOnDestroy() {
        if (this.someSubscription) {
            this.someSubscription.unsubscribe();
        }
    }
    setActiveToDo(toDo, index) {
        this.currentToDo = toDo;
        this.currentIndex = index;
    }
    completeToDo(toDo) {
        this.toDo.completed = true;
        this.toDoService.complete(toDo)
            .subscribe((response) => {
            console.log(`toDo completed: ${JSON.stringify(response)}`);
            this.router.navigate(["/dashboard"]);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _toDo_toDo_service__WEBPACK_IMPORTED_MODULE_4__["ToDoService"] },
    { type: _user_pumpkins_user_pumpkins_service__WEBPACK_IMPORTED_MODULE_5__["UserPumpkinsService"] },
    { type: _pet_pet_service__WEBPACK_IMPORTED_MODULE_6__["PetService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    overflow: hidden;\n    background-color:#9687CB;\n    padding: 20px 10px;\n    position: -webkit-sticky;\n    position: sticky;\n    top:100%;\n    /* box-shadow:0px 2px 5px #777; */\n\n}\nh1{\n    color:  black;\n    font-size: 10px;\n\n}\na{\n    padding:0px 10px;\n    color:white;\n    text-decoration: none;\n}\ni{\n    color: black;\n    text-decoration: none;\n    padding: 0px 5px;\n    font-size: 18px;\n}\ni:hover{\n    color: green;\n}\na:hover{\n    color: green;\n\n}\n.media{\n    margin-left: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsaUNBQWlDOztBQUVyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7O0FBRW5CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5Njg3Q0I7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOjEwMCU7XG4gICAgLyogYm94LXNoYWRvdzowcHggMnB4IDVweCAjNzc3OyAqL1xuXG59XG5oMXtcbiAgICBjb2xvcjogIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxufVxuXG5he1xuICAgIHBhZGRpbmc6MHB4IDEwcHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pe1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmk6aG92ZXJ7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5hOmhvdmVye1xuICAgIGNvbG9yOiBncmVlbjtcblxufVxuLm1lZGlhe1xuICAgIG1hcmdpbi1sZWZ0OiA4NSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .banner{\n    background-image: url('forhomebg.png');\n    height: 1200px;\n    width: 2000px;\n    background-position: center;\n    background-size: cover;\n   \n}\n.content{\nposition: relative;\nwidth: 100%;\ndisplay:flex;\njustify-content: space-between;\nalign-items: center;\n\n\n}\n.content .textbox{\n    position: relative;\n    max-width: 600px;\n  margin-left: 12%;\n  margin-top: 10%;\n}\n.content h2{\n    font-weight: bold;\n    font-size: 70px;\n    margin-left: 5%;\n    color:#4A2E6F\n\n}\n.content .textbox p{\n    margin-left: 5%;\n    \n\n}\n.sign-up-button{\n    margin-left: 5%;\n    border-radius: 5px;\n    margin-left: 5%;\n    color:bisque;\n    \n }\n.content .textbox a{\n     text-decoration: none;\n    text-transform: uppercase;\n    background-color:#67be86;\n    color:bisque;\n    padding: 20px 30px;\n    display: inline-block;\n    letter-spacing: 5px;\n    font-weight: bold;\n    border-radius: 25px;\n\n }\n.content .textbox a:hover{\n     background-color:#47C365;\n   \n }\n.content .textbox p{\n    margin-right: 25%;\n }\n.thumb{\n    position: absolute;\n    left: 50%;\n    bottom:20px;\n    transform: translateX(-50%);\n    display: flex;\n margin-bottom: -35%;\n\n}\n.thumb li{\n    list-style: none;\n    display: inline-block;\n    margin: 0 20px;\n    cursor: pointer;\n    transition: 0.5s;\n}\n.thumb li :hover{\n    transform: translate(-15px);\n}\n.thumb li img{\n    max-width: 300px;\n\n}\n.banner1{\n    background-color:#cfc7ea;\n    height: 600px;\n    width: 2000px;\n    background-position: center;\n    background-size: cover;\n}\nh1{\n    font-size: 16px;\n    font-weight: bold;\n    \n}\n.banner2{\n    background-color:#9687CB;\n    height: 500px;\n    width: 2000px;\n    background-position: center;\n    background-size: cover;\n}\n.banner2 img{\n    margin-left: 60%;\n}\n/* }\n.banner2 .textbox2 p{\nposition: relative;\nmargin-right: 5%;\nfont-weight: bold;\nfont-size: 20px;\nmargin-bottom: -15%;  \n\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0Usc0NBQXVEO0lBQ3ZELGNBQWM7SUFDZCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjs7QUFFMUI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsWUFBWTtBQUNaLDhCQUE4QjtBQUM5QixtQkFBbUI7OztBQUduQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2Y7O0FBRUo7QUFFQTtJQUNJLGVBQWU7OztBQUduQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTs7Q0FFZjtBQUVDO0tBQ0cscUJBQXFCO0lBQ3RCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7O0NBRXRCO0FBQ0E7S0FDSSx3QkFBd0I7O0NBRTVCO0FBRUE7SUFDRyxpQkFBaUI7Q0FDcEI7QUFHRDtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixhQUFhO0NBQ2hCLG1CQUFtQjs7QUFFcEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOzs7Ozs7OztHQVFHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuYmFubmVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvZm9yaG9tZWJnLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEyMDBweDtcbiAgICB3aWR0aDogMjAwMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgXG59XG4uY29udGVudHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbndpZHRoOiAxMDAlO1xuZGlzcGxheTpmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG59XG5cbi5jb250ZW50IC50ZXh0Ym94e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogMTIlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cblxuXG4uY29udGVudCBoMntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGNvbG9yOiM0QTJFNkZcblxufVxuXG4uY29udGVudCAudGV4dGJveCBwe1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBcblxufVxuLnNpZ24tdXAtYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIGNvbG9yOmJpc3F1ZTtcbiAgICBcbiB9XG5cbiAgLmNvbnRlbnQgLnRleHRib3ggYXtcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjdiZTg2O1xuICAgIGNvbG9yOmJpc3F1ZTtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcblxuIH0gXG4gLmNvbnRlbnQgLnRleHRib3ggYTpob3ZlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojNDdDMzY1O1xuICAgXG4gfSAgXG5cbiAuY29udGVudCAudGV4dGJveCBwe1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuIH1cblxuIFxuLnRodW1ie1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOjIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gbWFyZ2luLWJvdHRvbTogLTM1JTtcblxufVxuXG4udGh1bWIgbGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG4udGh1bWIgbGkgOmhvdmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNXB4KTtcbn1cbi50aHVtYiBsaSBpbWd7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcblxufVxuLmJhbm5lcjF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2ZjN2VhO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDIwMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmgxe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBcbn1cblxuLmJhbm5lcjJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojOTY4N0NCO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDIwMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5iYW5uZXIyIGltZ3tcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xufVxuLyogfVxuLmJhbm5lcjIgLnRleHRib3gyIHB7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5tYXJnaW4tcmlnaHQ6IDUlO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5mb250LXNpemU6IDIwcHg7XG5tYXJnaW4tYm90dG9tOiAtMTUlOyAgXG5cbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.service */ "./src/app/constants.service.ts");




let HomePageComponent = class HomePageComponent {
    constructor(router, constants) {
        this.router = router;
        this.constants = constants;
    }
    ngOnInit() {
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{ \n    \n    text-decoration: none;\n    \n    background-color:#3fb35c;\n    color: black;\n     padding: 20px 30px; \n    display: inline-block;\n    border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjs7SUFFckIsd0JBQXdCO0lBQ3hCLFlBQVk7S0FDWCxrQkFBa0I7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbnsgXG4gICAgXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IzNmYjM1YztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgIHBhZGRpbmc6IDIwcHggMzBweDsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants.service */ "./src/app/constants.service.ts");





let LogoutComponent = class LogoutComponent {
    constructor(http, constants, router) {
        this.http = http;
        this.constants = constants;
        this.router = router;
    }
    ngOnInit() { }
    logOut() {
        console.log("Logging out.");
        const newLocal = this.http.post(this.constants.getRootURL() + "/logout", null);
        newLocal.subscribe(() => {
            console.log("Logged out.");
            this.router.navigate(["signin"]);
        }, (error) => {
            console.error("Error getting user " + JSON.stringify(error));
        });
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-logout",
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n .navbar-nav {\n    margin-left: auto;\n    height: 1%;\n}\n\n.navbar{\n    box-shadow:0px 2px 5px #777;\n}\n\n.img{\n  padding: 5px;\n  width: 1px; \n}\n\n/* \n.navbar{\n    width:98%;\n}\n\n.mr-2{\n    margin-left: 25px;\n}\n\n.menu-box{\n    height:650px;\n    background-color: #8080801f;\n    width: 65px;\n}\n\n.menu-box:hover{\n    width: 215px;\n    transition: 0.3s;\n\n}\n\n.main-box{\n    height: 650px;\n    width: 170px;\n    background-color: #80808040;;\n}\n\n.menu-items{\n    list-style: none;\n    line-height: 60px;\n    padding-left: 0px;\n    height: 100%;\n}\n\n.menu-items li{\n    font-size: 18px;\n    font-weight: 600;\n    padding-left: 25px;\n    cursor: pointer;\n    -webkit-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n-moz-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\nbox-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n\n}\n\n.menu-items li:hover{\n    background-color: white;\n    color: grey;\n\n}\n.onActive{\n    color: white;\n    background-color: royalblue;\n    -webkit-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n    -moz-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n    box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n}\n\n.onActive:hover{\n    color: white;\n    background-color: royalblue;\n\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUdDO0lBQ0csaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThERyIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbiAubmF2YmFyLW5hdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgaGVpZ2h0OiAxJTtcbn1cblxuLm5hdmJhcntcbiAgICBib3gtc2hhZG93OjBweCAycHggNXB4ICM3Nzc7XG59XG5cbi5pbWd7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDFweDsgXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogXG4ubmF2YmFye1xuICAgIHdpZHRoOjk4JTtcbn1cblxuLm1yLTJ7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5tZW51LWJveHtcbiAgICBoZWlnaHQ6NjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDFmO1xuICAgIHdpZHRoOiA2NXB4O1xufVxuXG4ubWVudS1ib3g6aG92ZXJ7XG4gICAgd2lkdGg6IDIxNXB4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG5cbn1cblxuLm1haW4tYm94e1xuICAgIGhlaWdodDogNjUwcHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA0MDs7XG59XG5cbi5tZW51LWl0ZW1ze1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudS1pdGVtcyBsaXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogOXB4IDlweCAxMXB4IC03cHggcmdiYSgwLDAsMCwwLjQ4KTtcbi1tb3otYm94LXNoYWRvdzogOXB4IDlweCAxMXB4IC03cHggcmdiYSgwLDAsMCwwLjQ4KTtcbmJveC1zaGFkb3c6IDlweCA5cHggMTFweCAtN3B4IHJnYmEoMCwwLDAsMC40OCk7XG5cbn1cblxuLm1lbnUtaXRlbXMgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGdyZXk7XG5cbn1cbi5vbkFjdGl2ZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogOXB4IDlweCAxMXB4IC03cHggcmdiYSgwLDAsMCwwLjQ4KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDlweCA5cHggMTFweCAtN3B4IHJnYmEoMCwwLDAsMC40OCk7XG4gICAgYm94LXNoYWRvdzogOXB4IDlweCAxMXB4IC03cHggcmdiYSgwLDAsMCwwLjQ4KTtcbn1cblxuLm9uQWN0aXZlOmhvdmVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG5cbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/pet/pet.component.css":
/*!***************************************!*\
  !*** ./src/app/pet/pet.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress {\n    width: 80%;\n    border: 2px solid black;\n    margin: 5px;\n}\n\n.progress-bar {\n    color: white;\n    background-color: blueviolet;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0L3BldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGV0L3BldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pet/pet.component.ts":
/*!**************************************!*\
  !*** ./src/app/pet/pet.component.ts ***!
  \**************************************/
/*! exports provided: PetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetComponent", function() { return PetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet.service */ "./src/app/pet/pet.service.ts");
/* harmony import */ var _toDo_toDo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toDo/toDo.service */ "./src/app/toDo/toDo.service.ts");
/* harmony import */ var _user_pumpkins_user_pumpkins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-pumpkins/user-pumpkins.service */ "./src/app/user-pumpkins/user-pumpkins.service.ts");







let PetComponent = class PetComponent {
    constructor(http, router, toDoService, userPumpkinsService, petService) {
        this.http = http;
        this.router = router;
        this.toDoService = toDoService;
        this.userPumpkinsService = userPumpkinsService;
        this.petService = petService;
        this.pet = {
            type: "Panda",
            hungerLevel: 5,
            mood: "Chilling",
        };
        this.toDos = [];
        this.toDo = {
            description: "",
            dayToDo: "",
            timeToDo: "",
            completed: false,
        };
        this.currentToDo = null;
        this.currentIndex = -1;
        this.user = {
            email: "",
            password: "",
            confirmPassword: "",
            type: "",
            pumpkins: 0,
        };
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.someSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Here is the dashing line comes in the picture.
                // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
                this.router.navigated = false;
            }
        });
    }
    ngOnInit() {
        const petObservable = this.petService.getPet();
        petObservable.subscribe((petData) => {
            this.pet = petData;
            document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel * 10}%`);
            console.log(`this pet: ${JSON.stringify(this.pet)}`);
        });
        const toDosObservable = this.toDoService.getAllToDos();
        toDosObservable.subscribe((toDosData) => {
            this.toDos = toDosData;
            console.log(`toDo completed: ${JSON.stringify(this.toDos[0].completed)}`);
        });
        const userObservable = this.userPumpkinsService.getUserPumpkins();
        userObservable.subscribe((userData) => {
            this.user = userData;
            console.log(`current pumpkins: ${JSON.stringify(this.user.pumpkins)}`);
        });
    }
    ngOnDestroy() {
        if (this.someSubscription) {
            this.someSubscription.unsubscribe();
        }
    }
    feedPet() {
        if (this.user.pumpkins >= 0) {
            if (this.pet.hungerLevel < 10) {
                this.pet.hungerLevel += 1;
                document.getElementById("progress-bar").setAttribute("style", `width: ${this.pet.hungerLevel * 10}%`);
                this.pet.mood = this.setMood(this.pet.hungerLevel);
                console.log(`this pet just before sending: ${JSON.stringify(this.pet)}`);
                this.user.pumpkins -= 1;
                this.petService.feed(this.pet)
                    .subscribe(response => {
                    console.log(`this pet was subscribed: ${JSON.stringify(response)}`);
                    this.router.navigate(['dashboard']);
                });
            }
            else {
                console.log(`ELSE this pet: ${JSON.stringify(this.pet)}`);
                this.router.navigate(['dashboard']);
            }
        }
    }
    setMood(hungerLevel) {
        let mood = "";
        if (hungerLevel < 1) {
            mood = "Not so good";
        }
        else if (hungerLevel < 3) {
            mood = "Brighter days are ahead";
        }
        else if (hungerLevel < 5) {
            mood = "Chilling";
        }
        else if (hungerLevel < 8) {
            mood = "Feeling GREAT";
        }
        else if (hungerLevel <= 10) {
            mood = "This is PERFECT";
        }
        return mood;
    }
};
PetComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _toDo_toDo_service__WEBPACK_IMPORTED_MODULE_5__["ToDoService"] },
    { type: _user_pumpkins_user_pumpkins_service__WEBPACK_IMPORTED_MODULE_6__["UserPumpkinsService"] },
    { type: _pet_service__WEBPACK_IMPORTED_MODULE_4__["PetService"] }
];
PetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-pet",
        template: __webpack_require__(/*! raw-loader!./pet.component.html */ "./node_modules/raw-loader/index.js!./src/app/pet/pet.component.html"),
        styles: [__webpack_require__(/*! ./pet.component.css */ "./src/app/pet/pet.component.css")]
    })
], PetComponent);



/***/ }),

/***/ "./src/app/pet/pet.service.ts":
/*!************************************!*\
  !*** ./src/app/pet/pet.service.ts ***!
  \************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PetService = class PetService {
    constructor(http) {
        this.http = http;
    }
    getPet() {
        return this.http.get("http://localhost:8080/api/pet");
    }
    feed(pet) {
        return this.http.put("http://localhost:8080/api/pet/feed", pet);
    }
};
PetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], PetService);



/***/ }),

/***/ "./src/app/pomodoro/pomodoro.component.css":
/*!*************************************************!*\
  !*** ./src/app/pomodoro/pomodoro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.banner{\n    background-image: url('pomobunny.png');\n    height: 900px;\n    background-position: center;\n    background-size: cover;\n}\n\n.card{\n    background-color:#9d8fd2;\n    max-width: 30rem;\n    width: 100%;\n    aspect-ratio: 2/1.3;\n    margin:auto;\n    transform: translateY(calc(42vh - 7rem));\n    border-radius: 1rem;\n    overflow: hidden;\n \n}\n\n.flex{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem;\n    flex:1;\n\n}\n\n.title{\n    text-align: center;\n    font-size: 2.3rem;\n    font-weight: bold;\n\n}\n\n.counter{\n    display: flex;\n    align-items: center;\n}\n\n.counter button{\n    margin: 0 0.5rem\n}\n\n.counter div{\n    font-size: 3rem;\n    font-weight: bold;\n}\n\n.position{\n    display: flex;\n    width: 300%;\n    height:100%;\n    justify-content: space-between;\n    \n}\n\n.buttons{\n    display: flex;\n}\n\n.buttons button{\nmargin: 0 .2rem;\n}\n\nbutton{\n    background-color: transparent;\n    border: 2px solid gray;\n    outline: none;\n    cursor: pointer;\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n}\n\nbutton:hover{\n    background-color: rgb(225, 201, 240);\n}\n\nsection{\n    height: 50vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    scroll-snap-align: start ;\n    color:#484260;\n\n    \n    \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9tb2Rvcm8vcG9tb2Rvcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxzQ0FBd0Q7SUFDeEQsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHdDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsTUFBTTs7QUFFVjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLDhCQUE4Qjs7QUFFbEM7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7Ozs7QUFJakIiLCJmaWxlIjoic3JjL2FwcC9wb21vZG9yby9wb21vZG9yby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmFubmVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvcG9tb2J1bm55LnBuZ1wiICk7XG4gICAgaGVpZ2h0OiA5MDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojOWQ4ZmQyO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYXNwZWN0LXJhdGlvOiAyLzEuMztcbiAgICBtYXJnaW46YXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyg0MnZoIC0gN3JlbSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiBcbn1cblxuLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZmxleDoxO1xuXG59XG4udGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbi5jb3VudGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3VudGVyIGJ1dHRvbntcbiAgICBtYXJnaW46IDAgMC41cmVtXG59XG4uY291bnRlciBkaXZ7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucG9zaXRpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG59XG5cblxuLmJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b25zIGJ1dHRvbntcbm1hcmdpbjogMCAuMnJlbTtcbn1cbmJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMDEsIDI0MCk7XG59XG5cbnNlY3Rpb257XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQgO1xuICAgIGNvbG9yOiM0ODQyNjA7XG5cbiAgICBcbiAgICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pomodoro/pomodoro.component.ts":
/*!************************************************!*\
  !*** ./src/app/pomodoro/pomodoro.component.ts ***!
  \************************************************/
/*! exports provided: PomodoroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomodoroComponent", function() { return PomodoroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



// import { countReset } from 'console';
let PomodoroComponent = class PomodoroComponent {
    constructor() {
        this.pageNumber = 'one';
        this.workDuration = 25;
        this.breakDuration = 5;
        this.message = 'GET TO WORK!';
        this.minutes = this.workDuration - 1;
        this.seconds = 60;
        this.interval = 0;
    }
    toggle(pageNumber) {
        this.pageNumber = pageNumber;
    }
    increaseFocusTime() {
        this.workDuration += 1;
        this.minutes = this.workDuration - 1;
    }
    decreaseFocusTime() {
        this.workDuration -= 1;
        this.minutes = this.workDuration - 1;
    }
    increaseBreakTime() {
        this.breakDuration += 1;
    }
    decreaseBreakTime() {
        this.breakDuration -= 1;
    }
    start() {
        this.playWork();
        this.interval = setInterval(() => counter(), 1000);
        const counter = () => {
            if (this.message == "Break Time" && this.minutes == 0 && this.seconds == 0) {
                this.message = "Get to work!";
                this.playWork();
                this.minutes = this.workDuration;
                this.seconds = 0;
            }
            else if (this.minutes == 0 && this.seconds == 0) {
                this.message = "Great job";
                this.minutes = this.breakDuration;
                this.seconds = 0;
                this.message = "Break Time";
                this.playGood();
            }
            else if (this.seconds == 0) {
                this.seconds = 59;
                this.minutes--;
            }
            else {
                this.seconds--;
            }
        };
    }
    stop() {
        clearInterval(this.interval);
    }
    ;
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
    ngOnInit() {
    }
};
PomodoroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pomodoro',
        template: __webpack_require__(/*! raw-loader!./pomodoro.component.html */ "./node_modules/raw-loader/index.js!./src/app/pomodoro/pomodoro.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('pageNumber', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('one', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-0%)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('two', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-33.3%)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('three', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    transform: 'translateX(-66.6%)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease')
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./pomodoro.component.css */ "./src/app/pomodoro/pomodoro.component.css")]
    })
], PomodoroComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif\n}\n\nbody{\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    padding:0px;\n}\n\n#bg {\n    position: fixed; \n    top: -50%; \n    left: -50%; \n    width: 200%; \n    height: 200%;\n    z-index: -1;\n  }\n\n#bg img {\n    position: absolute; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0; \n    margin: auto; \n    min-width: 50%;\n    min-height: 50%;\n  }\n\n.container{\n  width: 360px;\n  height: 600px;\n  margin: 8% auto;\n  background: white;\n  border-radius: 15px;\n  position: relative;\n  margin-right: 42%;\n  margin-top: 6%;\n}\n\n#bg {\n    position: fixed; \n    top: -50%; \n    left: -50%; \n    width: 200%; \n    height: 200%;\n    z-index: -1;\n  }\n\n#bg img {\n    position: absolute; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0; \n    margin: auto; \n    min-width: 50%;\n    min-height: 50%;\n  }\n\n.container form{\n    width: 280px;\n    position: absolute;\n    top: 100px;\n    left:40px;\n  }\n\n.container h1{\n    text-align: center;\n    margin-bottom: 20px;\n    font-weight: bold;\n    font-size:30PX;\n  }\n\n.container h2{\n    text-align: center;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    font-size: 16px;\n\n  }\n\n.container h3{\n    text-align: center;\n    margin-top: 20px;\n    font-size: 16px;\n\n  }\n\nform input{\n    width: 100%;\n    padding: 10px 5px;\n    margin: 5px 0;\n    border: 2;\n    border-bottom: 1px solid black;\n    outline: none;\n    background-color: transparent;\n  }\n\n.btn-box{\n    width:100%;\n    margin: 30px auto;\n    text-align: center;\n  }\n\nform button{\n    width: 110px;\n    height: 35px;\n    margin: 0 10px;\n    background: #6F5ACD;\n    border-radius: 30px;\n    border:0;\n    outline: none;\n    color: #fff;\n    cursor: pointer;\n  }\n\n.navbar-brand{\n   \n    margin-left: 1%\n  };\n  \n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUdBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFHRjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0FBR0E7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlOztFQUVqQjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTs7RUFFakI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7QUFDQTs7SUFFRTtFQUNGLENBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXG59XG5cbmJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzowcHg7XG59XG5cblxuI2JnIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHRvcDogLTUwJTsgXG4gICAgbGVmdDogLTUwJTsgXG4gICAgd2lkdGg6IDIwMCU7IFxuICAgIGhlaWdodDogMjAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAjYmcgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDsgXG4gICAgcmlnaHQ6IDA7IFxuICAgIGJvdHRvbTogMDsgXG4gICAgbWFyZ2luOiBhdXRvOyBcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG4gIH1cblxuXG4uY29udGFpbmVye1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogOCUgYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiA0MiU7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG5cbiNiZyB7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB0b3A6IC01MCU7IFxuICAgIGxlZnQ6IC01MCU7IFxuICAgIHdpZHRoOiAyMDAlOyBcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgI2JnIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0b3A6IDA7IFxuICAgIGxlZnQ6IDA7IFxuICAgIHJpZ2h0OiAwOyBcbiAgICBib3R0b206IDA7IFxuICAgIG1hcmdpbjogYXV0bzsgXG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICB9XG4gIFxuICAuY29udGFpbmVyIGZvcm17XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6NDBweDtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciBoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6MzBQWDtcbiAgfVxuXG5cbiAgLmNvbnRhaW5lciBoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICB9XG4gIC5jb250YWluZXIgaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gIH1cbiAgXG4gIGZvcm0gaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBib3JkZXI6IDI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuYnRuLWJveHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgZm9ybSBidXR0b257XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNkY1QUNEO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOjA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5hdmJhci1icmFuZHtcbiAgIFxuICAgIG1hcmdpbi1sZWZ0OiAxJVxuICB9O1xuICBcblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.service */ "./src/app/register/register.service.ts");




let RegisterComponent = class RegisterComponent {
    constructor(router, registerService) {
        this.router = router;
        this.registerService = registerService;
        this.user = {
            email: "",
            password: "",
            confirmPassword: "",
            type: "",
            pumpkins: 0,
        };
        this.pets = ["Panda", "Racoon"];
    }
    ngOnInit() {
    }
    onClickSubmit() {
        this.registerService.addUser(this.user).subscribe((savedUser) => {
            console.log(`user signed in: ${JSON.stringify(savedUser)}`);
            this.router.navigate(["/signin"]);
        }, (e) => {
            console.error("Error adding user " + JSON.stringify(e));
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/register/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/register/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegisterService = class RegisterService {
    constructor(http) {
        this.http = http;
    }
    addUser(user) {
        return this.http.post("http://localhost:8080/api/register", user);
    }
};
RegisterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], RegisterService);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import\nurl('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;900&display=swap\" rel=\"stylesheet');\n\n\n.container{\n  width: 360px;\n  height: 550px;\n  margin: 8% auto;\n  background: white;\n  border-radius: 15px;\n  position: relative;\n  margin-top: 9%;\n}\n\n\n#bg {\n    position: fixed; \n    top: -50%; \n    left: -50%; \n    width: 200%; \n    height: 200%;\n    z-index: -1;\n  }\n\n\n#bg img {\n    position: absolute; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0; \n    margin: auto; \n    min-width: 50%;\n    min-height: 50%;\n  }\n\n\n.container form{\n    width: 280px;\n    position: absolute;\n    top: 100px;\n    left:40px;\n  }\n\n\n.container h1{\n    text-align: center;\n    margin-bottom: 40px;\n    font-weight: bold;\n    font-size:30PX;\n \n  }\n\n\n.container h2{\n    text-align: center;\n    margin-bottom: -10px;\n    margin-top: 10px;\n    font-size: 16px;\n\n  }\n\n\n.container h3{\n    text-align: center;\n    margin-bottom: 40px;\n    font-size: 16px;\n\n  }\n\n\nform input{\n    width: 100%;\n    padding: 10px 5px;\n    margin: 5px 0;\n    border: 2;\n    border-bottom: 1px solid black;\n    outline: none;\n    background-color: transparent;\n  }\n\n\n.btn-box{\n    width:100%;\n    margin: 30px auto;\n    text-align: center;\n  }\n\n\nform button{\n    width: 110px;\n    height: 35px;\n    margin: 0 10px;\n    background: #6F5ACD;\n    border-radius: 30px;\n    border:0;\n    outline: none;\n    color: #fff;\n    cursor: pointer;\n  }\n\n\n#Form2{\n   left:450px;\n  }\n\n\n.container Banner{\n    height: 20px;\n    width: 120px\n  }\n\n\n.navbar-brand{\n    \n    margin-left: 1%\n  };\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzBHQUMwRzs7O0FBRzFHO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7RUFDYjs7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7O0FBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0VBQ1g7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsY0FBYzs7RUFFaEI7OztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTs7RUFFakI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlOztFQUVqQjs7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7OztBQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7OztBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOzs7QUFFRjtHQUNHLFVBQVU7RUFDWDs7O0FBQ0E7SUFDRSxZQUFZO0lBQ1o7RUFDRjs7O0FBS0E7O0lBRUU7RUFDRixDQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnRcbnVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRAMzAwOzQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXQnKTtcblxuXG4uY29udGFpbmVye1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogNTUwcHg7XG4gIG1hcmdpbjogOCUgYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogOSU7XG59XG5cblxuI2JnIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIHRvcDogLTUwJTsgXG4gICAgbGVmdDogLTUwJTsgXG4gICAgd2lkdGg6IDIwMCU7IFxuICAgIGhlaWdodDogMjAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAjYmcgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIHRvcDogMDsgXG4gICAgbGVmdDogMDsgXG4gICAgcmlnaHQ6IDA7IFxuICAgIGJvdHRvbTogMDsgXG4gICAgbWFyZ2luOiBhdXRvOyBcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG4gIH1cblxuICAuY29udGFpbmVyIGZvcm17XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGxlZnQ6NDBweDtcbiAgfVxuXG4gIC5jb250YWluZXIgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOjMwUFg7XG4gXG4gIH1cblxuXG4gIC5jb250YWluZXIgaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuXG4gIH1cblxuICAuY29udGFpbmVyIGgze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICB9XG5cbiAgZm9ybSBpbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIGJvcmRlcjogMjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5idG4tYm94e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgZm9ybSBidXR0b257XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNkY1QUNEO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyOjA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuI0Zvcm0ye1xuICAgbGVmdDo0NTBweDtcbiAgfVxuICAuY29udGFpbmVyIEJhbm5lcntcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDEyMHB4XG4gIH1cblxuXG5cblxuICAubmF2YmFyLWJyYW5ke1xuICAgIFxuICAgIG1hcmdpbi1sZWZ0OiAxJVxuICB9O1xuICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.service */ "./src/app/sign-in/sign-in.service.ts");




let SignInComponent = class SignInComponent {
    constructor(router, signinService) {
        this.router = router;
        this.signinService = signinService;
        this.signinUser = {
            email: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    onClickSubmit() {
        this.signinService.signinUser(this.signinUser).subscribe((savedUser) => {
            console.log(`user saved: ${JSON.stringify(savedUser)}`);
            this.router.navigate(["home"]);
        }, (e) => {
            console.error("Error adding user " + JSON.stringify(e));
        });
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SigninService"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/sign-in/sign-in.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-in/sign-in.service.ts ***!
  \********************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SigninService = class SigninService {
    constructor(http) {
        this.http = http;
    }
    signinUser(signinUser) {
        return this.http.post("http://localhost:8080/api/signin", signinUser);
    }
};
SigninService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SigninService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], SigninService);



/***/ }),

/***/ "./src/app/toDo/toDo.component.css":
/*!*****************************************!*\
  !*** ./src/app/toDo/toDo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif\n}\n\nbody{\n    display: flex;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    padding:0px;\n}\n\n#bg {\n    position: fixed; \n    top: -50%; \n    left: -50%; \n    width: 200%; \n    height: 200%;\n    z-index: -1;\n  }\n\n#bg img {\n    position: absolute; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0; \n    margin: auto; \n    min-width: 50%;\n    min-height: 50%;\n  }\n\n.container{\n    width: 360px;\n    height: 250px;\n    margin: 2% auto;\n    background: white;\n    border-radius: 5px;\n    position: relative;\n    padding: 2%;\n    \n  }\n\n.container form{\n    width: 280px;\n    position: center;\n    top: 100px;\n    left:40px;\n   \n    \n  }\n\n.container h2{\n      font-weight: bold;\n\n  }\n\n.btn-box{\n    width:100%;\n    margin: 30px auto;\n    text-align: center;\n  }\n\nform button{\n    width: 110px;\n    height: 35px;\n    margin: 0 10px;\n    background: linear-gradient(to right, #ff10ab,#ffad06);\n    border-radius: 30px;\n    border:0;\n    outline: none;\n    color: #fff;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9Eby90b0RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFHQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXOztFQUViOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUzs7O0VBR1g7O0FBRUE7TUFDSSxpQkFBaUI7O0VBRXJCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxzREFBc0Q7SUFDdEQsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC90b0RvL3RvRG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZlxufVxuXG5ib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6MHB4O1xufVxuXG5cbiNiZyB7XG4gICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICB0b3A6IC01MCU7IFxuICAgIGxlZnQ6IC01MCU7IFxuICAgIHdpZHRoOiAyMDAlOyBcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgI2JnIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICB0b3A6IDA7IFxuICAgIGxlZnQ6IDA7IFxuICAgIHJpZ2h0OiAwOyBcbiAgICBib3R0b206IDA7IFxuICAgIG1hcmdpbjogYXV0bzsgXG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICB9XG5cbiAgLmNvbnRhaW5lcntcbiAgICB3aWR0aDogMzYwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBtYXJnaW46IDIlIGF1dG87XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBcbiAgfVxuICBcbiAgLmNvbnRhaW5lciBmb3Jte1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwb3NpdGlvbjogY2VudGVyO1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDo0MHB4O1xuICAgXG4gICAgXG4gIH1cblxuICAuY29udGFpbmVyIGgye1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgfVxuXG4gIC5idG4tYm94e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBmb3JtIGJ1dHRvbntcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMTBhYiwjZmZhZDA2KTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjowO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/toDo/toDo.component.ts":
/*!****************************************!*\
  !*** ./src/app/toDo/toDo.component.ts ***!
  \****************************************/
/*! exports provided: ToDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoComponent", function() { return ToDoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _toDo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo.service */ "./src/app/toDo/toDo.service.ts");
/* harmony import */ var _pet_pet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pet/pet.service */ "./src/app/pet/pet.service.ts");
/* harmony import */ var _user_pumpkins_user_pumpkins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-pumpkins/user-pumpkins.service */ "./src/app/user-pumpkins/user-pumpkins.service.ts");






let ToDoComponent = class ToDoComponent {
    constructor(router, toDoService, userPumpkinsService, petService) {
        this.router = router;
        this.toDoService = toDoService;
        this.userPumpkinsService = userPumpkinsService;
        this.petService = petService;
        this.pet = {
            type: "Panda",
            hungerLevel: 5,
            mood: "Chilling",
        };
        this.toDos = [];
        this.toDo = {
            description: "",
            dayToDo: "",
            timeToDo: "",
            completed: false,
        };
        this.currentToDo = null;
        this.currentIndex = -1;
        this.user = {
            email: "",
            password: "",
            confirmPassword: "",
            type: "",
            pumpkins: 0,
        };
        this.date = {
            year: "",
            month: "",
            day: ""
        };
        this.years = ["2022", "2023", "2024"];
        this.months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        this.days = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
            "24", "25", "26", "27", "28", "29", "30", "31"];
        this.time = {
            hour: "",
            minute: "",
            dayOrNight: ""
        };
        this.hours = ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
        this.minutes = ["00", "15", "30", "45"];
        this.dayOrNights = ["AM", "PM"];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.someSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Here is the dashing line comes in the picture.
                // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
                this.router.navigated = false;
            }
        });
    }
    ngOnInit() {
        const toDosObservable = this.toDoService.getAllToDos();
        toDosObservable.subscribe((toDosData) => {
            this.toDos = toDosData;
            console.log(`toDo completed: ${JSON.stringify(this.toDos[0].completed)}`);
        });
        const userObservable = this.userPumpkinsService.getUserPumpkins();
        userObservable.subscribe((userData) => {
            this.user = userData;
            console.log(`current pumpkins: ${JSON.stringify(this.user.pumpkins)}`);
        });
    }
    onClickSubmit() {
        this.toDo.dayToDo = this.date.year + "-" + this.date.month + "-" + this.date.day;
        console.log(`toDo day inputted: ${JSON.stringify(this.toDo.dayToDo)}`);
        if (this.time.dayOrNight == "PM" && this.time.hour != "12") {
            this.time.hour = (Number(this.time.hour) + 12).toString();
        }
        ;
        this.toDo.timeToDo = this.time.hour + ":" + this.time.minute + ":00";
        this.toDoService.addToDo(this.toDo).subscribe((savedToDo) => {
            console.log(`toDo added: ${JSON.stringify(savedToDo)}`);
            this.router.navigate(["/dashboard"]);
        }, (e) => {
            console.error("Error adding ToDo " + JSON.stringify(e));
        });
    }
};
ToDoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _toDo_service__WEBPACK_IMPORTED_MODULE_3__["ToDoService"] },
    { type: _user_pumpkins_user_pumpkins_service__WEBPACK_IMPORTED_MODULE_5__["UserPumpkinsService"] },
    { type: _pet_pet_service__WEBPACK_IMPORTED_MODULE_4__["PetService"] }
];
ToDoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toDo',
        template: __webpack_require__(/*! raw-loader!./toDo.component.html */ "./node_modules/raw-loader/index.js!./src/app/toDo/toDo.component.html"),
        styles: [__webpack_require__(/*! ./toDo.component.css */ "./src/app/toDo/toDo.component.css")]
    })
], ToDoComponent);



/***/ }),

/***/ "./src/app/toDo/toDo.service.ts":
/*!**************************************!*\
  !*** ./src/app/toDo/toDo.service.ts ***!
  \**************************************/
/*! exports provided: ToDoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoService", function() { return ToDoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants.service */ "./src/app/constants.service.ts");




let ToDoService = class ToDoService {
    constructor(http, constants) {
        this.http = http;
        this.constants = constants;
    }
    addToDo(toDo) {
        return this.http.post("http://localhost:8080/api/todo", toDo);
    }
    getAllToDos() {
        return this.http.get("http://localhost:8080/api/todos");
    }
    complete(toDo) {
        return this.http.put("http://localhost:8080/api/todos/complete", toDo);
    }
};
ToDoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _constants_service__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"] }
];
ToDoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ToDoService);



/***/ }),

/***/ "./src/app/user-pumpkins/user-pumpkins.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-pumpkins/user-pumpkins.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHVtcGtpbnMvdXNlci1wdW1wa2lucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-pumpkins/user-pumpkins.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-pumpkins/user-pumpkins.component.ts ***!
  \**********************************************************/
/*! exports provided: UserPumpkinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPumpkinsComponent", function() { return UserPumpkinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_pumpkins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-pumpkins.service */ "./src/app/user-pumpkins/user-pumpkins.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserPumpkinsComponent = class UserPumpkinsComponent {
    constructor(http, userPumpkinsService, router) {
        this.http = http;
        this.userPumpkinsService = userPumpkinsService;
        this.router = router;
        this.user = {
            email: "",
            password: "",
            confirmPassword: "",
            type: "",
            pumpkins: 0,
        };
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.someSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                // Here is the dashing line comes in the picture.
                // You need to tell the router that, you didn't visit or load the page previously, so mark the navigated flag to false as below.
                this.router.navigated = false;
            }
        });
    }
    ngOnInit() {
        const userObservable = this.userPumpkinsService.getUserPumpkins();
        userObservable.subscribe((userData) => {
            this.user = userData;
            console.log(`current pumpkins: ${JSON.stringify(this.user.pumpkins)}`);
        });
    }
    ngOnDestroy() {
        if (this.someSubscription) {
            this.someSubscription.unsubscribe();
        }
    }
};
UserPumpkinsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _user_pumpkins_service__WEBPACK_IMPORTED_MODULE_2__["UserPumpkinsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserPumpkinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-pumpkins',
        template: __webpack_require__(/*! raw-loader!./user-pumpkins.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-pumpkins/user-pumpkins.component.html"),
        styles: [__webpack_require__(/*! ./user-pumpkins.component.css */ "./src/app/user-pumpkins/user-pumpkins.component.css")]
    })
], UserPumpkinsComponent);



/***/ }),

/***/ "./src/app/user-pumpkins/user-pumpkins.service.ts":
/*!********************************************************!*\
  !*** ./src/app/user-pumpkins/user-pumpkins.service.ts ***!
  \********************************************************/
/*! exports provided: UserPumpkinsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPumpkinsService", function() { return UserPumpkinsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserPumpkinsService = class UserPumpkinsService {
    constructor(http) {
        this.http = http;
    }
    getUserPumpkins() {
        return this.http.get("http://localhost:8080/api/user/pumpkins");
    }
};
UserPumpkinsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserPumpkinsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UserPumpkinsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexiscurry/Desktop/LiftOff/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map