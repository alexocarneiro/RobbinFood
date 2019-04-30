import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResultAlimentacaoPage } from './result-alimentacao.page';
var routes = [
    {
        path: '',
        component: ResultAlimentacaoPage
    }
];
var ResultAlimentacaoPageModule = /** @class */ (function () {
    function ResultAlimentacaoPageModule() {
    }
    ResultAlimentacaoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ResultAlimentacaoPage]
        })
    ], ResultAlimentacaoPageModule);
    return ResultAlimentacaoPageModule;
}());
export { ResultAlimentacaoPageModule };
//# sourceMappingURL=result-alimentacao.module.js.map