webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
            _this.renderer.listenGlobal('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_examples_module__ = __webpack_require__("../../../../../src/app/examples/examples.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 // this is needed!









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_7__examples_examples_module__["a" /* ExamplesModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_component__ = __webpack_require__("../../../../../src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_landing_landing_component__ = __webpack_require__("../../../../../src/app/examples/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_login_login_component__ = __webpack_require__("../../../../../src/app/examples/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_profile_profile_component__ = __webpack_require__("../../../../../src/app/examples/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/components/testimonials/testimonials.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_4__components_components_component__["a" /* ComponentsComponent */] },
    { path: 'nucleoicons', component: __WEBPACK_IMPORTED_MODULE_8__components_testimonials_testimonials_component__["a" /* TestimonialsComponent */] },
    { path: 'examples/landing', component: __WEBPACK_IMPORTED_MODULE_5__examples_landing_landing_component__["a" /* LandingComponent */] },
    { path: 'examples/login', component: __WEBPACK_IMPORTED_MODULE_6__examples_login_login_component__["a" /* LoginComponent */] },
    { path: 'examples/profile', component: __WEBPACK_IMPORTED_MODULE_7__examples_profile_profile_component__["a" /* ProfileComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-about-us\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                <h2 class=\"title\">Who we are?</h2>\n                <h5 class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>\n            </div>\n        </div>\n        <div class=\"separator separator-primary\"></div>\n        <div class=\"section-story-overview\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\n                        <!-- First image on the left side -->\n                        <p class=\"blockquote blockquote-primary\">\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.\"\n                            <br>\n                            <br>\n                            <small>-NVNV</small>\n                        </p>\n                    </div>\n                    <!-- Second image on the left side of the article -->\n                    <div class=\"image-container\" style=\"background-image: url('assets/img/church/ex-2.jpeg')\"></div>\n                </div>\n                <div class=\"col-md-5\">\n                    <!-- First image on the right side, above the article -->\n                    <div class=\"image-container image-right\" style=\"background-image: url('assets/img/church/in-2.jpeg')\"></div>\n                    <h3>SSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</h3>\n                    <p>\n                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga..\n                    </p>\n                    <p>\n                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.\n                    </p>\n                    <p>\n                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax__ = __webpack_require__("../../../../rellax/rellax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rellax__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.data = new Date();
    }
    AboutComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new __WEBPACK_IMPORTED_MODULE_1_rellax__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/church-header.jpeg');\">\n\n    </div>\n      <div class=\"container\">\n          <div class=\"content-center brand\">\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\n              <h1 class=\"h1-seo\">High Beam Dreams</h1>\n              <h3>Your Event, Our Hospitality</h3>\n          </div>\n\n          <div class=\"text-center\">\n\n          </div>\n          <h3 class=\"category category-absolute\">\n              <a href=\"https://www.facebook.com/\" class=\"btn btn-primary btn-icon btn-round\" target=\"_blank\">\n                  <i class=\"fa fa-facebook-square\"></i>\n              </a>\n              <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\" href=\"https://twitter.com/\" target=\"_blank\">\n                  <i class=\"fa fa-twitter\"></i>\n              </a>\n              <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\" href=\"https://www.instagram.com/\" target=\"_blank\">\n                  <i class=\"fa fa-instagram\"></i>\n              </a>\n          </h3>\n      </div>\n  </div>\n\n  <div class=\"main\">\n\n      <app-about></app-about>\n      <app-hospitality></app-hospitality>\n      <app-service></app-service>\n      <app-gallery></app-gallery>\n      <app-testimonials></app-testimonials>\n      <app-faq></app-faq>\n  </div>\n  <footer class=\"footer\" data-background-color=\"black\">\n      <div class=\"container\">\n          <nav>\n              <ul>\n                  <li>\n                      <a href=\"https://www.techarha.com\">\n                          Techarha\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://www.creative-tim.com\">\n                          Creative Tim\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                          MIT License\n                      </a>\n                  </li>\n              </ul>\n          </nav>\n          <div class=\"copyright\">\n              &copy; Developed, Designed and Coded by\n              <a href=\"https://www.techarha.com\">Techarha</a>,\n              <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>,\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n          </div>\n      </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rellax__ = __webpack_require__("../../../../rellax/rellax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rellax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rellax__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new __WEBPACK_IMPORTED_MODULE_2_rellax__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-components',
            template: __webpack_require__("../../../../../src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    h3.home-social a{\n        color: #ffffff;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbAccordionConfig */]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__faq_faq_component__ = __webpack_require__("../../../../../src/app/components/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__testimonials_testimonials_component__ = __webpack_require__("../../../../../src/app/components/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_component__ = __webpack_require__("../../../../../src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_service_component__ = __webpack_require__("../../../../../src/app/components/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hospitality_hospitality_component__ = __webpack_require__("../../../../../src/app/components/hospitality/hospitality.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_component__["a" /* ComponentsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_10__testimonials_testimonials_component__["a" /* TestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__service_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_13__hospitality_hospitality_component__["a" /* HospitalityComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_11__components_component__["a" /* ComponentsComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-faq\" id=\"faq\">\n    <div class=\"container\">\n        <h3 class=\"title\">FAQ</h3>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/faq/faq.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () { };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/components/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-gallery\" id=\"gallery\">\n    <div class=\"container\">\n        <h3 class=\"title\">Gallery</h3>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () { };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/hospitality/hospitality.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-hospitality\"\n     style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\n    <!--<div class=\"section section-hospitality\" id=\"hospitality\">-->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                <h2 class=\"title\">Hospitality</h2>\n                <h5 class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>\n            </div>\n        </div>\n        <div class=\"separator separator-primary\"></div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"aravira-hospitality owl-carousel owl-theme owl-loaded\">\n                    <div class=\"owl-stage-outer\">\n                        <div class=\"owl-stage\">\n                            <div class=\"owl-item cloned active\" >\n                                <div class=\"item\">\n                                    <div class=\"single-hospitality box-radius\">\n                                        <div class=\"icon\">\n                                            <svg width=\"51\" height=\"51\" viewBox=\"0 0 51 51\">\n                                                <path d=\"M50.859,20.065 C49.823,23.423 48.055,26.317 45.459,28.914 C42.405,31.967 38.676,34.134 35.070,36.229 C31.668,38.200 28.457,40.067 25.991,42.532 C24.141,44.376 22.894,46.412 22.170,48.753 C22.014,49.257 21.742,49.704 21.380,50.066 C20.975,50.471 20.463,50.762 19.891,50.906 C18.805,51.173 17.660,50.857 16.869,50.066 L0.932,34.129 C0.097,33.290 -0.207,32.065 0.141,30.932 C1.177,27.575 2.945,24.685 5.541,22.085 C8.596,19.032 12.324,16.864 15.932,14.773 C19.332,12.798 22.545,10.930 25.012,8.465 C26.860,6.619 28.108,4.584 28.829,2.243 C28.986,1.742 29.257,1.295 29.619,0.933 C30.024,0.528 30.536,0.233 31.109,0.093 C32.194,-0.175 33.339,0.142 34.130,0.933 L50.067,16.870 C50.900,17.704 51.207,18.934 50.859,20.065 ZM31.875,3.187 C27.349,17.851 7.716,17.209 3.187,31.874 C8.466,37.150 13.846,42.532 19.124,47.812 C23.652,33.147 43.285,33.785 47.815,19.124 C42.536,13.845 37.154,8.463 31.875,3.187 ZM33.836,9.222 L32.745,10.717 C32.063,11.648 31.282,12.556 30.416,13.422 C29.515,14.322 28.545,15.132 27.549,15.897 L27.543,15.893 C27.226,16.185 26.732,16.178 26.429,15.871 C26.115,15.558 26.115,15.046 26.429,14.732 C26.485,14.672 26.550,14.631 26.615,14.595 C27.552,13.879 28.457,13.128 29.289,12.294 C30.096,11.488 30.824,10.641 31.457,9.775 L32.516,8.325 C32.553,8.257 32.597,8.188 32.656,8.129 C32.970,7.815 33.478,7.815 33.792,8.129 C34.091,8.428 34.103,8.902 33.832,9.219 L33.836,9.222 ZM26.097,20.494 C25.879,20.678 25.630,20.741 25.343,20.684 C25.060,20.628 24.753,20.556 24.415,20.472 C24.086,20.389 23.738,20.351 23.377,20.367 C23.016,20.380 22.642,20.556 22.256,20.906 C23.112,21.808 23.968,22.780 24.824,23.764 C25.366,23.500 25.904,23.274 26.440,23.065 C26.975,22.859 27.510,22.741 28.033,22.700 C28.563,22.662 29.085,22.721 29.608,22.868 C30.135,23.014 30.657,23.311 31.177,23.746 C31.632,24.124 31.948,24.516 32.127,24.972 C32.307,25.424 32.373,25.922 32.316,26.473 C32.261,27.021 32.092,27.612 31.809,28.226 C31.526,28.836 31.143,29.452 30.667,30.038 C30.945,30.286 31.226,30.523 31.507,30.747 C31.621,30.841 31.689,30.968 31.706,31.136 C31.722,31.302 31.674,31.460 31.556,31.603 C31.439,31.744 31.293,31.821 31.124,31.827 C30.952,31.840 30.808,31.790 30.690,31.687 C30.411,31.438 30.131,31.180 29.854,30.909 C29.277,31.488 28.692,31.877 28.100,32.092 C27.514,32.309 26.955,32.391 26.426,32.353 C25.896,32.319 25.415,32.192 24.990,31.989 C24.564,31.787 24.212,31.530 23.941,31.225 C23.673,30.921 23.536,30.620 23.536,30.323 C23.536,30.025 23.667,29.760 23.928,29.533 C24.183,29.315 24.414,29.209 24.631,29.213 C24.847,29.215 25.060,29.273 25.265,29.374 C25.474,29.477 25.683,29.601 25.895,29.748 C26.107,29.891 26.337,30.003 26.586,30.081 C26.835,30.156 27.109,30.162 27.417,30.096 C27.725,30.035 28.074,29.842 28.472,29.505 C27.529,28.503 26.586,27.424 25.646,26.336 C24.462,26.973 23.361,27.278 22.339,27.340 C21.314,27.398 20.431,27.134 19.681,26.510 C19.220,26.128 18.904,25.723 18.734,25.247 C18.563,24.774 18.504,24.264 18.567,23.706 C18.626,23.153 18.785,22.582 19.053,22.007 C19.318,21.433 19.654,20.890 20.062,20.397 C19.958,20.306 19.855,20.220 19.751,20.132 C19.633,20.032 19.564,19.901 19.549,19.731 C19.528,19.567 19.581,19.411 19.695,19.277 C19.813,19.139 19.956,19.065 20.130,19.065 C20.302,19.061 20.446,19.120 20.560,19.225 C20.664,19.322 20.768,19.419 20.872,19.518 C21.142,19.250 21.507,18.976 21.961,18.708 C22.415,18.440 22.896,18.251 23.399,18.136 C23.910,18.024 24.401,18.018 24.881,18.102 C25.367,18.188 25.772,18.423 26.108,18.808 C26.371,19.107 26.489,19.412 26.474,19.726 C26.455,20.038 26.328,20.295 26.097,20.494 ZM29.283,28.724 C29.476,28.518 29.640,28.282 29.783,28.017 C29.929,27.749 30.024,27.485 30.071,27.219 C30.113,26.954 30.110,26.696 30.047,26.440 C29.991,26.189 29.848,25.956 29.624,25.732 C29.397,25.509 29.151,25.370 28.892,25.304 C28.631,25.242 28.370,25.231 28.105,25.271 C27.847,25.315 27.588,25.388 27.330,25.496 C27.071,25.604 26.833,25.711 26.605,25.814 C27.496,26.829 28.388,27.821 29.283,28.724 ZM21.439,21.694 C21.216,21.938 21.040,22.190 20.922,22.442 C20.798,22.694 20.726,22.944 20.704,23.183 C20.679,23.426 20.700,23.647 20.766,23.849 C20.828,24.052 20.930,24.223 21.077,24.363 C21.421,24.696 21.815,24.845 22.266,24.826 C22.717,24.807 23.249,24.627 23.862,24.291 C23.053,23.379 22.247,22.498 21.439,21.694 ZM23.451,35.348 L23.454,35.348 C23.769,35.096 24.231,35.107 24.519,35.400 C24.832,35.712 24.832,36.220 24.519,36.531 C24.494,36.555 24.467,36.574 24.438,36.596 L24.441,36.599 C23.433,37.365 22.604,38.056 21.710,38.950 C20.902,39.756 20.172,40.605 19.541,41.468 L18.522,42.862 C18.490,42.921 18.452,42.973 18.404,43.023 C18.092,43.332 17.584,43.332 17.272,43.023 C17.002,42.752 16.968,42.333 17.167,42.023 L17.164,42.020 L18.255,40.531 C18.935,39.600 19.718,38.687 20.583,37.823 C21.483,36.920 22.455,36.114 23.451,35.348 Z\"\n                                                      class=\"money\"></path>\n                                            </svg>\n                                        </div>\n                                        <h3>Best Rates</h3>\n                                        <p>Find among our offering rooms and suites while you decide to stay. We accept\n                                            promotion codes</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"owl-item cloned active\" >\n                                <div class=\"item\">\n                                    <div class=\"single-hospitality box-radius\">\n                                        <div class=\"icon\">\n                                            <svg width=\"42\" height=\"42\" viewBox=\"0 0 42 42\">\n                                                <path d=\"M40.018,42.013 C38.915,42.013 38.023,41.120 38.023,40.018 L38.023,21.000 C38.023,11.613 30.385,3.976 20.998,3.976 C11.611,3.976 3.975,11.613 3.975,21.000 L3.975,40.018 C3.975,41.120 3.083,42.013 1.980,42.013 C0.877,42.013 -0.014,41.120 -0.014,40.018 L-0.014,21.000 C-0.014,9.412 9.413,-0.015 21.000,-0.015 C32.587,-0.015 42.014,9.412 42.012,21.000 L42.012,40.018 C42.012,41.120 41.121,42.013 40.018,42.013 ZM9.648,37.694 L12.285,36.898 L18.819,38.863 L12.260,40.830 C11.845,40.958 11.393,41.017 10.957,41.017 C9.882,41.017 8.851,40.662 8.338,40.049 C7.616,39.180 8.201,38.128 9.648,37.694 ZM33.659,32.446 C34.383,33.310 33.796,34.366 32.353,34.798 L29.713,35.591 L23.180,33.629 L29.739,31.660 C31.185,31.230 32.940,31.580 33.659,32.446 ZM28.826,22.046 C29.498,26.364 26.497,28.269 27.070,30.054 C23.605,28.938 26.386,20.879 22.005,18.907 C22.996,21.390 23.761,26.557 21.472,28.839 C22.235,25.999 20.255,23.466 18.731,21.438 C18.577,25.039 14.881,26.711 15.647,30.457 C13.452,27.977 12.513,25.656 13.419,22.505 C14.539,18.602 17.169,18.500 17.968,13.989 C18.883,21.035 21.816,14.346 21.546,10.086 C24.675,13.261 28.312,18.759 28.826,22.046 ZM8.340,32.446 C9.064,31.580 10.817,31.230 12.261,31.660 L32.353,37.694 C33.797,38.125 34.383,39.178 33.662,40.049 C33.151,40.662 32.117,41.017 31.043,41.017 C30.606,41.017 30.156,40.958 29.739,40.830 L9.649,34.798 C8.201,34.366 7.617,33.310 8.340,32.446 Z\"\n                                                      class=\"offer\"></path>\n                                            </svg>\n                                        </div>\n                                        <h3>Fantastic offers</h3>\n                                        <p>Find among our offering rooms and suites while you decide to stay. We accept\n                                            promotion codes</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"owl-item cloned active\" >\n                                <div class=\"item\">\n                                    <div class=\"single-hospitality box-radius\">\n                                        <div class=\"icon\">\n                                            <svg width=\"63.03\" height=\"36\" viewBox=\"0 0 63.03 36\">\n                                                <path d=\"M62.470,16.798 L48.989,28.271 L57.108,33.022 C57.884,33.474 58.137,34.460 57.681,35.224 C57.377,35.731 56.834,36.012 56.277,36.012 C55.994,36.012 55.708,35.940 55.446,35.788 L45.762,30.120 L8.194,30.120 L2.783,35.533 C2.464,35.852 2.043,36.012 1.622,36.012 C1.208,36.012 0.794,35.858 0.479,35.551 C-0.163,34.925 -0.170,33.908 0.462,33.277 L6.356,27.380 L6.474,27.300 L4.722,27.993 C4.473,28.094 4.218,28.139 3.965,28.139 C3.157,28.139 2.393,27.660 2.075,26.875 C1.656,25.845 2.163,24.674 3.209,24.263 L19.503,17.830 C19.934,17.661 20.410,17.638 20.851,17.772 L35.594,22.193 C35.866,21.745 36.237,21.349 36.729,21.064 L51.394,12.574 C52.942,11.677 54.939,12.189 55.854,13.722 C56.762,15.254 56.242,17.223 54.689,18.124 L40.024,26.614 C39.800,26.744 39.563,26.831 39.324,26.903 L45.606,26.903 L60.344,14.360 C61.025,13.782 62.052,13.854 62.642,14.528 C63.229,15.201 63.153,16.217 62.470,16.798 ZM20.351,21.824 L7.455,26.916 L7.514,26.903 L37.286,26.903 L20.351,21.824 ZM51.179,11.630 C47.928,11.630 45.293,9.029 45.293,5.821 C45.293,2.612 47.928,0.012 51.179,0.012 C54.428,0.012 57.063,2.612 57.063,5.821 C57.063,9.029 54.428,11.630 51.179,11.630 Z\"\n                                                      class=\"setting-view\"></path>\n                                            </svg>\n                                        </div>\n                                        <h3>Great View</h3>\n                                        <p>Find among our offering rooms and suites while you decide to stay. We accept\n                                            promotion codes</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/hospitality/hospitality.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description {\n  color: #000; }\n\n.owl-carousel.owl-loaded {\n  display: block; }\n\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  z-index: 1; }\n\n.our-hospitality-section {\n  color: #454545;\n  position: relative;\n  padding-bottom: 75px; }\n\n.owl-carousel .owl-stage-outer {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0px, 0px, 0px); }\n\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  z-index: 1; }\n\n.owl-theme .owl-controls {\n  margin-top: 10px;\n  text-align: center; }\n\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  width: 25%;\n  margin-top: 4%;\n  margin-right: 2%;\n  margin-left: 6%;\n  -webkit-backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.aravira-hospitality .item div {\n  display: block; }\n\n.item .item-thumb, .item div {\n  display: table-cell;\n  vertical-align: middle; }\n\n.single-hospitality {\n  background-color: rgba(97, 94, 90, 0.19);\n  border: 1px solid #5a5a5a;\n  padding: 30px 15px 30px;\n  text-align: center;\n  min-height: 255px; }\n\n.box-radius {\n  border-radius: 7px; }\n\n.aravira-hospitality .item div {\n  display: block; }\n\n.single-hospitality .icon {\n  display: block;\n  min-height: 52px; }\n\n.single-hospitality h3 {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 30px;\n  text-transform: capitalize;\n  margin: 15px 0;\n  letter-spacing: 0.015em; }\n\n.single-hospitality p {\n  margin-bottom: 0;\n  color: #e6faff;\n  font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/hospitality/hospitality.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HospitalityComponent = /** @class */ (function () {
    function HospitalityComponent() {
    }
    HospitalityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hospitality',
            template: __webpack_require__("../../../../../src/app/components/hospitality/hospitality.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/hospitality/hospitality.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HospitalityComponent);
    return HospitalityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/service/service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-service\" id=\"service\">\n    <div class=\"container\">\n        <h3 class=\"title\">Service</h3>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/service/service.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.closeAlert = function () {
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service',
            template: __webpack_require__("../../../../../src/app/components/service/service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/service/service.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/testimonials/testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-testimonials\" id=\"testimonials\">\n    <div class=\"container\">\n        <h3 class=\"title\">Testimonials</h3>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/testimonials/testimonials.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/testimonials/testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent.prototype.ngOnDestroy = function () {
    };
    TestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__("../../../../../src/app/components/testimonials/testimonials.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  examples works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__("../../../../../src/app/examples/examples.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/examples.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/examples.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__ = __webpack_require__("../../../../../src/app/examples/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/examples/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("../../../../../src/app/examples/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_component__ = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_nouislider__["NouisliderModule"],
                __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__examples_component__["a" /* ExamplesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg6.jpg');\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <h1 class=\"title\">This is our great company.</h1>\n                <div class=\"text-center\">\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                        <i class=\"fa fa-facebook-square\"></i>\n                    </a>\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                        <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                        <i class=\"fa fa-google-plus\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-about-us\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Who we are?</h2>\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\n                </div>\n            </div>\n            <div class=\"separator separator-primary\"></div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\n                            <!-- First image on the left side -->\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\n                                <br>\n                                <br>\n                                <small>-NOAA</small>\n                            </p>\n                        </div>\n                        <!-- Second image on the left side of the article -->\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\"></div>\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                        <p>\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\n                        </p>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-team text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Here is our team</h2>\n            <div class=\"team\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Romina Hadid</h4>\n                            <p class=\"category text-primary\">Model</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-instagram\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-facebook-square\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Ryan Tompson</h4>\n                            <p class=\"category text-primary\">Designer</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Eva Jenner</h4>\n                            <p class=\"category text-primary\">Fashion</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-google-plus\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-youtube-play\"></i></a>\n                            <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fa fa-twitter\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-contact-us text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Want to work with us?</h2>\n            <p class=\"description\">Your project is very important to us.</p>\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"now-ui-icons users_circle-08\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons ui-1_email-85\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                    <div class=\"textarea-container\">\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                    </div>\n                    <div class=\"send-button\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://presentation.creative-tim.com\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax__ = __webpack_require__("../../../../rellax/rellax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rellax__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new __WEBPACK_IMPORTED_MODULE_1_rellax__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/examples/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-header\" filter-color=\"orange\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-4 content-center\">\n            <div class=\"card card-login card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header header-primary text-center\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"content\">\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                        </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                      </div>\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                        </div>\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                      </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                    </div>\n                    <div class=\"pull-left\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\n                        </h6>\n                    </div>\n                    <div class=\"pull-right\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                        </h6>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://presentation.creative-tim.com\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n              {{data | date: 'yyyy'}}, Designed by\n                <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/examples/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <div class=\"photo-container\">\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\n                </div>\n                <h3 class=\"title\">Ryan Scheinder</h3>\n                <p class=\"category\">Photographer</p>\n                <div class=\"content\">\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>48</h2>\n                        <p>Bookmarks</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                  <i class=\"fa fa-twitter\"></i>\n              </a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                  <i class=\"fa fa-instagram\"></i>\n              </a>\n          </div>\n          <h3 class=\"title\">About me</h3>\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h4 class=\"title text-center\">My Portfolio</h4>\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons design_image\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons location_world\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons sport_user-run\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://presentation.creative-tim.com\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"http://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax__ = __webpack_require__("../../../../rellax/rellax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rellax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rellax__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new __WEBPACK_IMPORTED_MODULE_1_rellax__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/examples/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <!--<div class=\"dropdown button-dropdown\">-->\n        <!--<div ngbDropdown>-->\n        <!--<a class=\"dropdown-toggle\" ngbDropdownToggle>-->\n        <!--<span class=\"button-bar\"></span>-->\n        <!--<span class=\"button-bar\"></span>-->\n        <!--<span class=\"button-bar\"></span>-->\n        <!--</a>-->\n        <!--<div ngbDropdownMenu>-->\n        <!--<a class=\"dropdown-header\">Dropdown header</a>-->\n        <!--<a class=\"dropdown-item\" href=\"#\">Action</a>-->\n        <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>-->\n        <!--<a class=\"dropdown-item\" href=\"#\">Something else here</a>-->\n        <!--<div class=\"dropdown-divider\"></div>-->\n        <!--<a class=\"dropdown-item\" href=\"#\">Separated link</a>-->\n        <!--<div class=\"dropdown-divider\"></div>-->\n        <!--<a class=\"dropdown-item\" href=\"#\">One more separated link</a>-->\n        <!--</div>-->\n        <!--</div>-->\n        <!--</div>-->\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\"\n               ngbTooltip=\"Your Events, Our Hospitality\">\n                High Beam Dreams\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n                    aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n                    (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#about\" target=\"_self\">\n                        <!--<i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>-->\n                        <p>About</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">\n                        <!--<i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>-->\n                        <p>Hospitality</p>\n                    </a>\n                </li>\n                <!--<li class=\"nav-item\">-->\n                    <!--<a class=\"nav-link\" href=\"#\">-->\n                        <!--&lt;!&ndash;<i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>&ndash;&gt;-->\n                        <!--<p>Ambiance</p>-->\n                    <!--</a>-->\n                <!--</li>-->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">\n                        <!--<i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>-->\n                        <p>Services</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">\n                        <!--<i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>-->\n                        <p>Gallery</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">\n                        <!--<i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>-->\n                        <p>Testimonials</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-neutral\"\n                       href=\"#\">\n                        <!--<i class=\"now-ui-icons arrows-1_share-66\"></i>-->\n                        <p>Book Now</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map