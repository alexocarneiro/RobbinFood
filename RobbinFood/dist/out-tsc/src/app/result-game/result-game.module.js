import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResultGamePage } from './result-game.page';
var routes = [
    {
        path: '',
        component: ResultGamePage
    }
];
var ResultGamePageModule = /** @class */ (function () {
    function ResultGamePageModule() {
    }
    ResultGamePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ResultGamePage]
        })
    ], ResultGamePageModule);
    return ResultGamePageModule;
}());
export { ResultGamePageModule };
//# sourceMappingURL=result-game.module.js.map