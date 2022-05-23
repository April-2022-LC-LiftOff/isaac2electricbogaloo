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

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"footer\">\n<div class=\"row\">\n<div class=\"col-lg-6\">\n    <h1>Panda Planner</h1>\n    <p>Never miss a task!</p>\n</div>\n<div class=\"col-lg-4\">\n<a routerLink=\"\">Home</a>\n<a routerLink=\"\">Pofile</a>\n<a routerLink=\"\">Settngs</a>\n\n</div>\n<div class=\"col-lg-2\">\n    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n    <a href=\"#\" target=\"_blank\"><i class=\"fa fa-youtube\"></i></a>\n    \n</div>\n\n</div>\n\n</div>\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n <app-navbar></app-navbar>\n \n <div class=\"banner\">\n    <div class= \"content\">\n    <h1 class=\"mb-5\">PANDA,<br/>\n    </h1>\n    <h2>the only planner made with you in mind!</h2> \n </div>\n    <div class=\"sign-up-buton\">\n      <button type=\"button\" routerLink=\"/register\" class=\"btn btn-secondary btn-lg\">SIGN UP!</button>\n    </div>\n</div> \n\n\n<div class=\"container nmt-5 mb-5\">\n    <h1 class=\"text-center\">PANDA is an app that helps those with ADHD stay on task and get things done.</h1>\n    <div class= \"row\">\n      \n      <!-- ONE -->\n       <div class=\"col-lg-4\"> \n         <div class=\"stepBox\">\n           \n          <h1>1</h1>\n          <p>Create a profile</p>\n         </div>\n      </div>\n         \n         \n         \n         <!--TWO -->\n          <div class=\"col-lg-4\">\n            <div class=\"stepBox\">\n            <h1>2</h1>\n            <p>Select your panda</p>\n            </div>\n         </div>\n        \n        \n        \n            <!--THREE -->\n         <div class=\"col-lg-4\">\n            <div class=\"stepBox\">\n            <h1>3</h1>\n            <p>Get to work</p>\n            </div>\n         </div>\n</div>\n</div>\n\n\n<app-footer></app-footer>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<nav class= \"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/home\"> <img src=\"https://drive.google.com/uc?export=view&id=1t_2e6E6NGZ0ydCpviCXZI-NHKJulFXs7\"alt=\"logo\" style=\"width:5em; height:5em;\" /></a>\n  <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\"routerLinkActive= \"active-link\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/landing\"routerLinkActive= \"active-link\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/footer\"routerLinkActive= \"active-link\"><i class=\"fa fa-gear\"></i></a>\n        \n      </li>\n  </ul>\n</nav>\n\n\n\n<router-outlet></router-outlet> \n\n<!-- https://drive.google.com/file/d/1t_2e6E6NGZ0ydCpviCXZI-NHKJulFXs7/view?usp=sharing -->\n<!-- <img src=\"https://drive.google.com/file/1t_2e6E6NGZ0ydCpviCXZI-NHKJulFXs7/view\" alt=\"whatever\">\n<img src=\"https://drive.google.com/uc?export=view&id=1t_2e6E6NGZ0ydCpviCXZI-NHKJulFXs7\" alt=\"whatever\"> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<div class=\"container\">\n<form \n    #form=\"ngForm\"\n    class=\"border p-3 rounded-3\"\n    method=\"post\"\n    action=\"register\"\n    (ngSubmit)=\"onClickSubmit()\"\n    >\n    <div class=\"row g-0\">\n        <div class=\"col text-center p-2 mb-3 bg-light\">\n            <span class=\"fs-3\">Register</span>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col mb-3\">\n            <label for=\"firstName\" class=\"form-label\">First Name</label>\n            <input \n            type=\"text\" \n            action=\"register\"\n            class=\"form-control\" \n            id=\"firstName\"\n            name=\"firstName\"\n            [(ngModel)]=\"user.firstName\"\n            required\n            >\n        </div>\n        <div class=\"col mb-3\">\n            <label for=\"lastName\" class=\"form-label\">Last Name</label>\n            <input \n            type=\"text\"\n            action=\"register\"\n            class=\"form-control\" \n            id=\"lastName\"\n            name=\"lastName\"\n            [(ngModel)]=\"user.lastName\"\n            required\n            >\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col mb-3\">\n        <label for=\"email\" class=\"form-label\">Email address</label>\n        <input \n        type=\"text\"\n        action=\"register\"\n        class=\"form-control\" \n        id=\"email\"\n        name=\"email\"\n        [(ngModel)]=\"user.email\"\n        required\n        >\n        <div class=\"form-text\"></div>\n        </div>\n    </div>\n    \n    <div class=\"row\">\n        <div class=\"col mb-3\">\n        <label for=\"password\"\n        class=\"form-label\">Password</label>\n        <input \n        type=\"password\" \n        class=\"form-control\" \n        id=\"password\"\n        name=\"password\"\n        [(ngModel)]=\"user.password\"\n        required\n        >\n        <div class=\"form-text\"></div>\n        </div>\n        \n    <div class=\"col mb-3\">\n        <label for=\"confirmPassword\" class=\"form-label\">Confirm Password</label>\n        <input \n        type=\"password\" \n        class=\"form-control\" \n        id=\"confirmPassword\"\n        name=\"confirmPassword\"\n        [(ngModel)]=\"user.confirmPassword\"\n        required\n        >\n        <div class=\"form-text\"></div>\n    </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-6-offset-3\">\n            <div class=\"d-grid\">\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            </div>\n        </div>\n    </div>\n\n    \n</form>\n\n\n<router-outlet></router-outlet> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in/sign-in.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <a class=\"navbar-brand\" routerLink=\"/home\"> <img src=\"https://drive.google.com/uc?export=view&id=1t_2e6E6NGZ0ydCpviCXZI-NHKJulFXs7\"alt=\"logo\" style=\"width:5em; height:5em;\" /></a>\n"

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








const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'nav', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"] },
    { path: 'footer', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"] },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] }
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

module.exports = "\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
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

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n    overflow: hidden;\n    background-color: rgb(50, 48, 48);\n    padding: 20px 10px;\n    position: -webkit-sticky;\n    position: sticky;\n    top:100%\n\n}\nh1{\n    color: white;\n    font-size: 20px;\n\n}\na{\n    padding:0px 10px;\n    color:white;\n    text-decoration: none;\n}\ni{\n    color:white;\n    text-decoration: none;\n    padding: 0px 5px;\n    font-size: 18px;\n}\ni:hover{\n    color: green;\n}\na:hover{\n    color: green;\n\n}\np{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQjs7QUFFSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA0OCwgNDgpO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDoxMDAlXG5cbn1cbmgxe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbn1cblxuYXtcbiAgICBwYWRkaW5nOjBweCAxMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmk6aG92ZXJ7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5hOmhvdmVye1xuICAgIGNvbG9yOiBncmVlbjtcblxufVxucHtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

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

module.exports = ".banner{\n    background-image: url('pandabackground.jpg');\n    height: 1200px;\n    background-position: center;\n    background-size: cover;\n\n\n\n}\nh1{\n    font-weight: bold;\n    font-size: 300px;\n    color: rgb(57, 53, 53);\n    padding: 100px;\n    position: center;\n    left: auto\n    \n}\nh2{\n    text-align: center;\n}\n.sign-up-buton{\n    margin-left: 59%;\n    color: #fff;\n    border-radius: 5px;\n    \n }\n.content a:hover{\n     background-color: var(--primary-color);\n     color: #fff;\n }\n.stepBox{\n    background-color: rgb(44, 98, 44);\n    padding: 10px 30px;\n    border-radius: 10px;\n    text-align: center;\n    margin: 10%;\n    /* background: url(\"https://drive.google.com/uc?export=view&id=1DRdKtOhOEDyc8vGRSvURYJRiCFgK66fO\"); */\n    background-size: 100%;\n}\n.stepBox h1{\n    color: purple;\n    font-size: 50px;\n    font-weight: bold;\n    \n}\n.stepBox p{\n    font-weight: bold;\n    color:#fff\n\n}\n.text-center{\n    font-size: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQXNEO0lBQ3RELGNBQWM7SUFDZCwyQkFBMkI7SUFDM0Isc0JBQXNCOzs7O0FBSTFCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCOztBQUVKO0FBRUM7SUFDRyxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCOztDQUVyQjtBQUVBO0tBQ0ksc0NBQXNDO0tBQ3RDLFdBQVc7Q0FDZjtBQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxR0FBcUc7SUFDckcscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQjs7QUFFSjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9pbWcvcGFuZGFiYWNrZ3JvdW5kLmpwZycpO1xuICAgIGhlaWdodDogMTIwMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG5cblxufVxuaDF7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMDBweDtcbiAgICBjb2xvcjogcmdiKDU3LCA1MywgNTMpO1xuICAgIHBhZGRpbmc6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbGVmdDogYXV0b1xuICAgIFxufVxuXG4gaDJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSBcblxuLnNpZ24tdXAtYnV0b257XG4gICAgbWFyZ2luLWxlZnQ6IDU5JTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgXG4gfVxuXG4gLmNvbnRlbnQgYTpob3ZlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgIGNvbG9yOiAjZmZmO1xuIH1cblxuLnN0ZXBCb3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA5OCwgNDQpO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwJTtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MURSZEt0T2hPRUR5Yzh2R1JTdlVSWUpSaUNGZ0s2NmZPXCIpOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbi5zdGVwQm94IGgxe1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIFxufVxuLnN0ZXBCb3ggcHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjojZmZmXG5cbn1cbi50ZXh0LWNlbnRlcntcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4iXX0= */"

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

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n .navbar-nav {\n    margin-left: auto;\n}\n\n.navbar{\n    box-shadow:0px 2px 5px #777;\n    height: 5%;\n}\n\n.img{\n  padding: 5px;\n  width: 100px; \n}\n\n/* \n.navbar{\n    width:98%;\n}\n\n.mr-2{\n    margin-left: 25px;\n}\n\n.menu-box{\n    height:650px;\n    background-color: #8080801f;\n    width: 65px;\n}\n\n.menu-box:hover{\n    width: 215px;\n    transition: 0.3s;\n\n}\n\n.main-box{\n    height: 650px;\n    width: 170px;\n    background-color: #80808040;;\n}\n\n.menu-items{\n    list-style: none;\n    line-height: 60px;\n    padding-left: 0px;\n    height: 100%;\n}\n\n.menu-items li{\n    font-size: 18px;\n    font-weight: 600;\n    padding-left: 25px;\n    cursor: pointer;\n    -webkit-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n-moz-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\nbox-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n\n}\n\n.menu-items li:hover{\n    background-color: white;\n    color: grey;\n\n}\n.onActive{\n    color: white;\n    background-color: royalblue;\n    -webkit-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n    -moz-box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n    box-shadow: 9px 9px 11px -7px rgba(0,0,0,0.48);\n}\n\n.onActive:hover{\n    color: white;\n    background-color: royalblue;\n\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztDQUdDO0lBQ0csaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBMkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThERyIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbiAubmF2YmFyLW5hdiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5uYXZiYXJ7XG4gICAgYm94LXNoYWRvdzowcHggMnB4IDVweCAjNzc3O1xuICAgIGhlaWdodDogNSU7XG59XG5cbi5pbWd7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMHB4OyBcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiBcbi5uYXZiYXJ7XG4gICAgd2lkdGg6OTglO1xufVxuXG4ubXItMntcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLm1lbnUtYm94e1xuICAgIGhlaWdodDo2NTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwMWY7XG4gICAgd2lkdGg6IDY1cHg7XG59XG5cbi5tZW51LWJveDpob3ZlcntcbiAgICB3aWR0aDogMjE1cHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcblxufVxuXG4ubWFpbi1ib3h7XG4gICAgaGVpZ2h0OiA2NTBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDQwOztcbn1cblxuLm1lbnUtaXRlbXN7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51LWl0ZW1zIGxpe1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA5cHggOXB4IDExcHggLTdweCByZ2JhKDAsMCwwLDAuNDgpO1xuLW1vei1ib3gtc2hhZG93OiA5cHggOXB4IDExcHggLTdweCByZ2JhKDAsMCwwLDAuNDgpO1xuYm94LXNoYWRvdzogOXB4IDlweCAxMXB4IC03cHggcmdiYSgwLDAsMCwwLjQ4KTtcblxufVxuXG4ubWVudS1pdGVtcyBsaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogZ3JleTtcblxufVxuLm9uQWN0aXZle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA5cHggOXB4IDExcHggLTdweCByZ2JhKDAsMCwwLDAuNDgpO1xuICAgIC1tb3otYm94LXNoYWRvdzogOXB4IDlweCAxMXB4IC03cHggcmdiYSgwLDAsMCwwLjQ4KTtcbiAgICBib3gtc2hhZG93OiA5cHggOXB4IDExcHggLTdweCByZ2JhKDAsMCwwLDAuNDgpO1xufVxuXG4ub25BY3RpdmU6aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcblxufSAqLyJdfQ== */"

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

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* *{\n    background-image: url('../../img/purple.jpg');\n    height: 1200px;\n    background-position: center;\n    background-size: cover;\n} */\n\n.form{\n    width: 500px;\n\n}\n\n.conatiner{\n    height: 100wh;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0dBS0c7O0FBRUg7SUFDSSxZQUFZOztBQUVoQjs7QUFFQztJQUNHLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qICp7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9pbWcvcHVycGxlLmpwZycpO1xuICAgIGhlaWdodDogMTIwMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSAqL1xuXG4uZm9ybXtcbiAgICB3aWR0aDogNTAwcHg7XG5cbn1cblxuIC5jb25hdGluZXJ7XG4gICAgaGVpZ2h0OiAxMDB3aDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gIl19 */"

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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    }
    ngOnInit() {
    }
    onClickSubmit() {
        this.registerService.addUser(this.user).subscribe((savedUser) => {
            console.log(`user saved: ${JSON.stringify(savedUser)}`);
            this.router.navigate(["/home"]);
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

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

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


let SignInComponent = class SignInComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
    })
], SignInComponent);



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