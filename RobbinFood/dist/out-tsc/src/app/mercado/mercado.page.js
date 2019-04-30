import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MercadoPage = /** @class */ (function () {
    function MercadoPage() {
        //observable do firebase para atualizar o badge em tempo real
        this.arrayImages1 = [
            { imgUrl: '../../assets/queijo.png', name: 'queijo', },
            { imgUrl: '../../assets/queijo_pedaco.png', name: 'queijo_pedaco', dinheiro: 3 },
            { imgUrl: '../../assets/leite.png', name: 'leite', dinheiro: 3 },
        ];
        this.arrayImages2 = [
            { imgUrl: '../../assets/maca.png', name: 'maca', dinheiro: 3 },
            { imgUrl: '../../assets/abacaxi.png', name: 'abacaxi', dinheiro: 3 },
            { imgUrl: '../../assets/banana.png', name: 'banana', dinheiro: 3 },
        ];
        this.arrayImages3 = [
            { imgUrl: '../../assets/Cenoura.png', name: 'Cenoura', dinheiro: 3 },
            { imgUrl: '../../assets/coisa_verde.png', name: 'coisa_verde', dinheiro: 3 },
            { imgUrl: '../../assets/tomate.png', name: 'tomate', dinheiro: 3 },
        ];
    }
    MercadoPage.prototype.ngOnInit = function () {
    };
    MercadoPage.prototype.comprar = function () {
        //subtrair a cada clique -5 do valor que tem no firebase
        // atualizar o badge
    };
    MercadoPage = tslib_1.__decorate([
        Component({
            selector: 'app-mercado',
            templateUrl: './mercado.page.html',
            styleUrls: ['./mercado.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MercadoPage);
    return MercadoPage;
}());
export { MercadoPage };
//# sourceMappingURL=mercado.page.js.map