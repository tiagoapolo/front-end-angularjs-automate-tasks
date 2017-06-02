var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Contact } from './../shared/contact.model';
import { Component, Input, trigger, state, style, animate, transition } from '@angular/core';
var ContactComponent = (function () {
    function ContactComponent() {
        this.state = 'inactive';
        this.textSlice = 'Ver Info';
    }
    ContactComponent.prototype.showDisclosable = function () {
        if (this.state === 'inactive') {
            this.state = 'active';
            this.textSlice = 'Fechar';
        }
        else {
            this.state = 'inactive';
            this.textSlice = 'Ver Info';
        }
    };
    return ContactComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Contact)
], ContactComponent.prototype, "contact", void 0);
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css'],
        animations: [
            trigger('focusPanel', [
                state('inactive', style({
                    display: 'none',
                    opacity: 0
                })),
                state('active', style({
                    display: 'initial',
                    opacity: 1
                })),
                transition('inactive => active', animate('250ms ease-in')),
                transition('active => inactive', animate('5ms ease-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map