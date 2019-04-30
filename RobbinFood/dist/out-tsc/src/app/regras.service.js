import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
var RegrasService = /** @class */ (function () {
    function RegrasService(users) {
        this.users = users;
    }
    RegrasService.prototype.addPontosRefeicao = function () {
        return this.users.updateUser(40);
    };
    RegrasService.prototype.addPontosMercado = function () {
        //No clique do botão de alguma das refeições adiciona 20 pt nos ponto do usuário no firebase
    };
    RegrasService.prototype.addPontosQuiz = function () {
        //No clique do botão de alguma das refeições adiciona 20 pt nos ponto do usuário no firebase
    };
    RegrasService.prototype.progressGame = function () {
        //um switc case que tem sua várivel sempre atualizada pelo valor dos pontos do usuário no firebase
        // e ai vai validando cada case para ir mudando de fase e finalizar o joo
    };
    RegrasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [UsersService])
    ], RegrasService);
    return RegrasService;
}());
export { RegrasService };
//# sourceMappingURL=regras.service.js.map