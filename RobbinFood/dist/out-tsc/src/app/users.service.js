import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
var UsersService = /** @class */ (function () {
    function UsersService(af) {
        this.af = af;
        this.users = this.af.list('/users');
    }
    UsersService.prototype.create = function (user) {
        return this.users
            .push(user);
    };
    UsersService.prototype.updateUser = function (val) {
        return this.af.object("/users/uId/pontos").
            set(val);
    };
    UsersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], UsersService);
    return UsersService;
}());
export { UsersService };
//# sourceMappingURL=users.service.js.map