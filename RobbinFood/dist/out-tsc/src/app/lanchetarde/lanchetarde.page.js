import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var LanchetardePage = /** @class */ (function () {
    function LanchetardePage() {
        this.RobbinImage = '../../assets/robin_01.png';
        this.arrayImages = [
            { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1' },
            { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2' },
            { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3' },
        ];
    }
    LanchetardePage.prototype.ngOnInit = function () {
    };
    LanchetardePage = tslib_1.__decorate([
        Component({
            selector: 'app-lanchetarde',
            templateUrl: './lanchetarde.page.html',
            styleUrls: ['./lanchetarde.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LanchetardePage);
    return LanchetardePage;
}());
export { LanchetardePage };
//# sourceMappingURL=lanchetarde.page.js.map