import * as tslib_1 from "tslib";
import { AuthService } from './../auth.service';
import { UsersService } from './../users.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder } from "@angular/forms";
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, authService, navCtrl, UsersService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.UsersService = UsersService;
        this.RobbinImage = '../../assets/robin_01.png';
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.loginForm = formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.jogar = function () {
        var _this = this;
        var loginuser = this.loginForm.value;
        this.authService.createLogin({
            email: loginuser.email,
            password: loginuser.password
        }).then(function () {
            delete loginuser.password;
            //loginuser.uid = auth.Auth.uid; 
            _this.UsersService.create(loginuser);
            _this.navCtrl.navigateForward('tabs/home');
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            AuthService,
            NavController,
            UsersService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map