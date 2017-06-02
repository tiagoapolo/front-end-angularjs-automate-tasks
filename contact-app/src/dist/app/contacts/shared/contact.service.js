var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
        this.headers = new Headers();
        this.headers.append('Content-type', 'application/json');
    }
    ContactService.prototype.getContacts = function () {
        var options = new RequestOptions({ headers: this.headers });
        return this.http.get(this.baseUrl + "/contacts", options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable.throw(error.json().error || 'Server error'); });
    };
    return ContactService;
}());
ContactService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map