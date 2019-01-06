(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'text-classification';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var paths = [
    { path: '', component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] },
    { path: 'results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_3__["ResultsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(paths)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http, router) {
        this.http = http;
        this.router = router;
        this.answers = [];
        this.results = {};
        this.questions = ['Were you satisfied with product you purchased? Give us a short review',
            'Were you satisfied with our Customer Service? Give us a short review',
            'Would you like to do buisness again with us? Give us a short review'];
        this.current = 0;
    }
    DataService.prototype.getAnswers = function () {
        return this.answers.slice();
    };
    DataService.prototype.getResults = function () {
        return __assign({}, this.results);
    };
    DataService.prototype.addAnswer = function (answer, i) {
        this.answers[i] = answer;
    };
    DataService.prototype.findAnswer = function (i) {
        return this.answers[i];
    };
    DataService.prototype.getLength = function () {
        return this.answers.length ? this.answers.length : 0;
    };
    DataService.prototype.sendAnswers = function () {
        var _this = this;
        this.http.post('analyze', this.answers).subscribe(function (res) {
            _this.results = res;
            _this.answers = [];
            _this.router.navigate(['/results']);
        });
    };
    DataService.prototype.reset = function () {
        this.answers = [];
        this.results = {};
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  height: 50%;\r\n  /* margin-top:2%; */\r\n  text-align: center;\r\n  width:80%;\r\n  margin:auto;\r\n}\r\n\r\n\r\ntextarea {\r\n  width:90%;\r\n}\r\n\r\n\r\nform{\r\n  margin:auto;\r\n}\r\n\r\n\r\n.wrapper{\r\n  background-color: rgba(169,169,169,0.2);\r\n  height:100%;\r\n}\r\n\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\nmat-toolbar {\r\n  background-color: transparent;\r\n  margin-top:5%;\r\n}\r\n\r\n\r\nmat-button {\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n.question {\r\n  width:100%;\r\n  text-align: center;\r\n  margin-bottom:2%;\r\n  padding-top:2%;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 2em;\r\n}\r\n\r\n\r\nbutton {\r\n  width:45%;\r\n}\r\n\r\n\r\nmat-form-field {\r\n  width:50%;\r\n}\r\n\r\n\r\n@media screen and (max-width: 400px){\r\n  .question {\r\n    font-size:1em;\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtDQUNiOzs7QUFHRDtFQUNFLFVBQVU7Q0FDWDs7O0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7OztBQUNEO0VBQ0Usd0NBQXdDO0VBQ3hDLFlBQVk7Q0FDYjs7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOzs7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QixjQUFjO0NBQ2Y7OztBQUVEO0VBQ0UsOEJBQThCO0NBQy9COzs7QUFFRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsZUFBZTtDQUNoQjs7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7OztBQUVEO0VBQ0UsVUFBVTtDQUNYOzs7QUFFRDtFQUNFO0lBQ0UsY0FBYztHQUNmO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICAvKiBtYXJnaW4tdG9wOjIlOyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDo4MCU7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6OTAlO1xyXG59XHJcbmZvcm17XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjksMTY5LDE2OSwwLjIpO1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLXRvcDo1JTtcclxufVxyXG5cclxubWF0LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbToyJTtcclxuICBwYWRkaW5nLXRvcDoyJTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6NDUlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6NTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XHJcbiAgLnF1ZXN0aW9uIHtcclxuICAgIGZvbnQtc2l6ZToxZW07XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf = \"i < questions.length, else analysing\" >\n  <div class=\"question\">{{questions[i]}}</div>\n  <form #form = \"ngForm\" (ngSubmit) = \"goNext(form)\">\n    <mat-card>\n        <mat-form-field>\n            <textarea matInput name=\"answer\"\n            type=\"text\"\n            rows=\"15\"\n            placeholder=\"Enter your answer here\"\n            required\n            [(ngModel)] = \"inputText\"\n            #textarea>\n          </textarea>\n          </mat-form-field>\n    </mat-card>\n    <mat-toolbar>\n        <button mat-button (click)=\"goBack()\" type=\"button\" color=\"primary\">Back</button>\n        <span class=\"spacer\"></span>\n        <button type=\"submit\" mat-button color=\"primary\">Next</button>\n    </mat-toolbar>\n  </form>\n</div>\n\n<ng-template #analysing>\n  <app-loading></app-loading>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormComponent = /** @class */ (function () {
    function FormComponent(dataService) {
        this.dataService = dataService;
        this.questions = [];
        this.userAnswers = [];
        this.i = 0;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.questions = this.dataService.questions;
        this.i = this.dataService.current;
    };
    FormComponent.prototype.goBack = function () {
        this.i -= 1;
        if (this.i < 0) {
            this.i = 0;
        }
        if (this.dataService.findAnswer(this.i)) {
            this.inputText = this.dataService.findAnswer(this.i).answer;
        }
    };
    FormComponent.prototype.goNext = function (form) {
        if (!form.invalid) {
            this.dataService.addAnswer({
                question: this.questions[this.i],
                answer: form.value.answer
            }, this.i);
            this.i += 1;
            if (this.questions.length <= this.dataService.getLength()) {
                this.dataService.sendAnswers();
            }
            else {
                if (this.dataService.findAnswer(this.i)) {
                    this.inputText = this.dataService.findAnswer(this.i).answer;
                }
                else {
                    form.resetForm();
                }
            }
        }
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('simpleAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.title {\r\n  width: 100%;\r\n  padding-top:5%;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 3em;\r\n  text-align: center;\r\n}\r\n\r\n/* .loading {\r\n  width:100%;\r\n  height:100%;\r\n  text-align: center;\r\n}\r\n\r\n.loading-wrapper {\r\n\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 40%;\r\n  width: 200px;\r\n  height: 200px;\r\n  text-align:center;\r\n}\r\n.loader1 {\r\n\r\n  animation: rise 1s infinite;\r\n  bottom: 0;\r\n  left: 0%;\r\n  position: absolute;\r\n}\r\n.loader2 {\r\n\r\n  animation: rise 1s infinite;\r\n  bottom: 0;\r\n  left: 25%;\r\n  position: absolute;\r\n  animation-delay: 0.2s;\r\n}\r\n.loader3 {\r\n  animation: rise 1s infinite;\r\n  bottom: 0;\r\n  left: 50%;\r\n  position: absolute;\r\n  animation-delay: 0.4s;\r\n}\r\n.loader4 {\r\n  animation: rise 1s infinite;\r\n  bottom: 0;\r\n  left: 75%;\r\n  position: absolute;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.loader5 {\r\n  animation: rise 1s infinite;\r\n  bottom: 0;\r\n  left: 100%;\r\n  position: absolute;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.loader {\r\n  width:20px;\r\n  height:0%;\r\n  margin-left: 10%;\r\n  background-color: #4B0082;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n@keyframes rise {\r\n  0% {\r\n    height: 0;\r\n  }\r\n\r\n  50% {\r\n    height:100%;\r\n  }\r\n\r\n  100% {\r\n    height: 0;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 820px){\r\n  .loading-wrapper {\r\n    left:40%;\r\n    height: 100px;\r\n  }\r\n\r\n  .loader {\r\n    width:10px;\r\n  }\r\n\r\n  .title {\r\n    padding-top:5%;\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 400px){\r\n  .loading-wrapper {\r\n    left:15%;\r\n    height: 100px;\r\n  }\r\n\r\n  .loader {\r\n    width:10px;\r\n  }\r\n\r\n  .title {\r\n    padding-top:5%;\r\n    font-size: 2em;\r\n  }\r\n} */\r\n\r\n.wrapper{\r\n  background-color: rgba(169,169,169,0.2);\r\n  height:100%;\r\n}\r\n\r\n.loader {\r\n  color: #0080c0;\r\n  font-size: 90px;\r\n  text-indent: -9999em;\r\n  overflow: hidden;\r\n  width: 1em;\r\n  height: 1em;\r\n  border-radius: 50%;\r\n  margin: 15% auto;\r\n  position: relative;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n  animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n}\r\n\r\n@-webkit-keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  5%,\r\n  95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  10%,\r\n  59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n\r\n@keyframes load6 {\r\n  0% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  5%,\r\n  95% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n  10%,\r\n  59% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n  }\r\n  20% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n  }\r\n  38% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n  }\r\n  100% {\r\n    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes round {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes round {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2R0k7O0FBQ0o7RUFDRSx3Q0FBd0M7RUFDeEMsWUFBWTtDQUNiOztBQUNEO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBRWpDLHlCQUF5QjtFQUN6QixzRUFBc0U7RUFDdEUsOERBQThEO0NBQy9EOztBQUNEO0VBQ0U7SUFDRSxvSEFBb0g7R0FDckg7RUFDRDs7SUFFRSxvSEFBb0g7R0FDckg7RUFDRDs7SUFFRSxvSkFBb0o7R0FDcko7RUFDRDtJQUNFLG1KQUFtSjtHQUNwSjtFQUNEO0lBQ0UsaUpBQWlKO0dBQ2xKO0VBQ0Q7SUFDRSxvSEFBb0g7R0FDckg7Q0FDRjs7QUFDRDtFQUNFO0lBQ0Usb0hBQW9IO0dBQ3JIO0VBQ0Q7O0lBRUUsb0hBQW9IO0dBQ3JIO0VBQ0Q7O0lBRUUsb0pBQW9KO0dBQ3JKO0VBQ0Q7SUFDRSxtSkFBbUo7R0FDcEo7RUFDRDtJQUNFLGlKQUFpSjtHQUNsSjtFQUNEO0lBQ0Usb0hBQW9IO0dBQ3JIO0NBQ0Y7O0FBQ0Q7RUFDRTtJQUNFLGdDQUFnQztJQUNoQyx3QkFBd0I7R0FDekI7RUFDRDtJQUNFLGtDQUFrQztJQUNsQywwQkFBMEI7R0FDM0I7Q0FDRjs7QUFDRDtFQUNFO0lBQ0UsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtHQUN6QjtFQUNEO0lBQ0Usa0NBQWtDO0lBQ2xDLDBCQUEwQjtHQUMzQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6NSU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogLmxvYWRpbmcge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy13cmFwcGVyIHtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDQwJTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4ubG9hZGVyMSB7XHJcblxyXG4gIGFuaW1hdGlvbjogcmlzZSAxcyBpbmZpbml0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5sb2FkZXIyIHtcclxuXHJcbiAgYW5pbWF0aW9uOiByaXNlIDFzIGluZmluaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAyNSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG4ubG9hZGVyMyB7XHJcbiAgYW5pbWF0aW9uOiByaXNlIDFzIGluZmluaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG4ubG9hZGVyNCB7XHJcbiAgYW5pbWF0aW9uOiByaXNlIDFzIGluZmluaXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA3NSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuLmxvYWRlcjUge1xyXG4gIGFuaW1hdGlvbjogcmlzZSAxcyBpbmZpbml0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICB3aWR0aDoyMHB4O1xyXG4gIGhlaWdodDowJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjAwODI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHJpc2Uge1xyXG4gIDAlIHtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KXtcclxuICAubG9hZGluZy13cmFwcGVyIHtcclxuICAgIGxlZnQ6NDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5sb2FkZXIge1xyXG4gICAgd2lkdGg6MTBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDo1JTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xyXG4gIC5sb2FkaW5nLXdyYXBwZXIge1xyXG4gICAgbGVmdDoxNSU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciB7XHJcbiAgICB3aWR0aDoxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHBhZGRpbmctdG9wOjUlO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG59ICovXHJcbi53cmFwcGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY5LDE2OSwxNjksMC4yKTtcclxuICBoZWlnaHQ6MTAwJTtcclxufVxyXG4ubG9hZGVyIHtcclxuICBjb2xvcjogIzAwODBjMDtcclxuICBmb250LXNpemU6IDkwcHg7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDE1JSBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgYW5pbWF0aW9uOiBsb2FkNiAxLjdzIGluZmluaXRlIGVhc2UsIHJvdW5kIDEuN3MgaW5maW5pdGUgZWFzZTtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDYge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDUlLFxyXG4gIDk1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZDYge1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG4gIDUlLFxyXG4gIDk1JSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMCUsXHJcbiAgNTklIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMDg3ZW0gLTAuODI1ZW0gMCAtMC40MmVtLCAtMC4xNzNlbSAtMC44MTJlbSAwIC0wLjQ0ZW0sIC0wLjI1NmVtIC0wLjc4OWVtIDAgLTAuNDZlbSwgLTAuMjk3ZW0gLTAuNzc1ZW0gMCAtMC40NzdlbTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzM4ZW0gLTAuNzU4ZW0gMCAtMC40MmVtLCAtMC41NTVlbSAtMC42MTdlbSAwIC0wLjQ0ZW0sIC0wLjY3MWVtIC0wLjQ4OGVtIDAgLTAuNDZlbSwgLTAuNzQ5ZW0gLTAuMzRlbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAzOCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zNzdlbSAtMC43NGVtIDAgLTAuNDJlbSwgLTAuNjQ1ZW0gLTAuNTIyZW0gMCAtMC40NGVtLCAtMC43NzVlbSAtMC4yOTdlbSAwIC0wLjQ2ZW0sIC0wLjgyZW0gLTAuMDllbSAwIC0wLjQ3N2VtO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3VuZCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm91bmQge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"loading\">\n  <div class=\"title\">Calculating sentiment for your answers...</div>\n  <div class=\"loading-wrapper\">\n    <div class=\"loader loader1\"></div>\n    <div class=\"loader loader2\"></div>\n    <div class=\"loader loader3\"></div>\n    <div class=\"loader loader4\"></div>\n    <div class=\"loader loader5\"></div>\n  </div>\n</div> -->\n<div class=\"wrapper\">\n<div class=\"title\">Calculating sentiment for your answers...</div>\n<div class=\"loader\">Loading...</div>\n</div>\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        this.answers = [];
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n  width:100%;\r\n  float: left;\r\n  height:450px;\r\n  display:block;\r\n}\r\n\r\n.picture {\r\n  width:45%;\r\n  float: left;\r\n  height: 400px;\r\n}\r\n\r\n.overall {\r\n  width:45%;\r\n  float:left;\r\n  text-align:center;\r\n  height:100%;\r\n  font-family: 'Open Sans', sans-serif;\r\n  font-size: 1.2em;\r\n}\r\n\r\n.text {\r\n  display: inline-block;\r\n  margin:20% auto;\r\n}\r\n\r\nmat-accordion {\r\n  display:block;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OjQ1MHB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbi5waWN0dXJlIHtcclxuICB3aWR0aDo0NSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLm92ZXJhbGwge1xyXG4gIHdpZHRoOjQ1JTtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjoyMCUgYXV0bztcclxufVxyXG5cclxubWF0LWFjY29yZGlvbiB7XHJcbiAgZGlzcGxheTpibG9jaztcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"picture\">\n    <img [src]=\"results.overall == 'pos' ? '../../assets/happy.png' : '../../assets/sad.png'\" width=\"400\" height=\"400\">\n  </div>\n  <div class=\"overall\">\n    <div class=\"text\">\n      Overall satisfaction:\n      <br>\n      <div [ngStyle]=\"{color : results.overall == 'pos' ? 'green' : 'red'}\">{{results.overall == 'pos' ? 'Positive' : 'Negative'}}</div>\n    </div>\n  </div>\n</div>\n\n\n  <mat-card style=\"width:95%; float: left; text-align:center; margin-left:20px\" *ngIf='results.data'>\n    <mat-accordion *ngFor='let el of results.data'>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{el.question}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div style=\"width:100%; text-align:center\">\n          <div style=\"float:left; width:45%\">{{el.answer}}</div>\n          <div style=\"float:left; width:45%\">Sentiment result: {{el.sentiment == 'pos' ? 'Positive' : 'Negative'}}</div>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-card>\n  <button mat-button color=\"primary\" (click) = \"back()\">Back to form</button>\n\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.results = this.dataService.getResults();
        console.log(this.results);
    };
    ResultsComponent.prototype.back = function () {
        this.dataService.reset();
        this.router.navigate(['/']);
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alen1\Desktop\Projekti\text-classification\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map