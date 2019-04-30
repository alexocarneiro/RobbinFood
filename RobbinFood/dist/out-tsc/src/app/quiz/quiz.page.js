import * as tslib_1 from "tslib";
import { FoodsService } from './../foods.service';
import { Component } from '@angular/core';
var QuizPage = /** @class */ (function () {
    function QuizPage(food) {
        this.food = food;
        this.arrayTemp = this.food.arrayImagesAlmoco1;
    }
    QuizPage.prototype.ngOnInit = function () {
    };
    QuizPage = tslib_1.__decorate([
        Component({
            selector: 'app-quiz',
            templateUrl: './quiz.page.html',
            styleUrls: ['./quiz.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FoodsService])
    ], QuizPage);
    return QuizPage;
}());
export { QuizPage };
//# sourceMappingURL=quiz.page.js.map