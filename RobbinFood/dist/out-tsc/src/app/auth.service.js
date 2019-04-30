import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
var AuthService = /** @class */ (function () {
    function AuthService(auth) {
        this.auth = auth;
        this.authState$ = this.auth.authState;
    }
    AuthService.prototype.createLogin = function (_a) {
        var email = _a.email, password = _a.password;
        return this.auth.auth
            .createUserWithEmailAndPassword(email, password); // o método é esse
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map