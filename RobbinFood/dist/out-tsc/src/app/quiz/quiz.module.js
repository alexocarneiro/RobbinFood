import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuizPage } from './quiz.page';
var routes = [
    {
        path: '',
        component: QuizPage
    }
];
var QuizPageModule = /** @class */ (function () {
    function QuizPageModule() {
    }
    QuizPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [QuizPage]
        })
    ], QuizPageModule);
    return QuizPageModule;
}());
export { QuizPageModule };
//# sourceMappingURL=quiz.module.js.map