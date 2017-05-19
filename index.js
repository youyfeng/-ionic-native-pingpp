var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Pingpp
 * @description
 * This plugin does something
 *
 * @usage
 * ```
 * import { Pingpp } from '@ionic-native/pingpp';
 *
 *
 * constructor(private pingpp: Pingpp) { }
 *
 * ...
 *
 *
 * this.pingpp.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var Pingpp = (function (_super) {
    __extends(Pingpp, _super);
    function Pingpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param charge {any} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    Pingpp.prototype.createPayment = function (charge) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return Pingpp;
}(IonicNativePlugin));
Pingpp.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Pingpp.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Pingpp.prototype, "createPayment", null);
Pingpp = __decorate([
    Plugin({
        pluginName: 'Pingpp',
        plugin: 'me.tongchia.cordova.pingpp',
        pluginRef: 'pingpp',
        repo: 'https://github.com/TongChia/cordova-plugin-pingpp',
        platforms: ['Android', 'iOS'],
        install: '',
    })
], Pingpp);
export { Pingpp };
//# sourceMappingURL=index.js.map