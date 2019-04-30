import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlimentacaoPage } from './alimentacao.page';
var routes = [
    {
        path: '',
        component: AlimentacaoPage
    }
];
var AlimentacaoPageModule = /** @class */ (function () {
    function AlimentacaoPageModule() {
    }
    AlimentacaoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AlimentacaoPage]
        })
    ], AlimentacaoPageModule);
    return AlimentacaoPageModule;
}());
export { AlimentacaoPageModule };
//# sourceMappingURL=alimentacao.module.js.map