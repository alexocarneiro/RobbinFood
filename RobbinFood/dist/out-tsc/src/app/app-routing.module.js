import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'alimentacao', loadChildren: './alimentacao/alimentacao.module#AlimentacaoPageModule' },
    { path: 'cafedamanha', loadChildren: './cafedamanha/cafedamanha.module#CafedamanhaPageModule' },
    { path: 'almoco', loadChildren: './almoco/almoco.module#AlmocoPageModule' },
    { path: 'jantar', loadChildren: './jantar/jantar.module#JantarPageModule' },
    { path: 'result-alimentacao', loadChildren: './result-alimentacao/result-alimentacao.module#ResultAlimentacaoPageModule' },
    { path: 'mercado', loadChildren: './mercado/mercado.module#MercadoPageModule' },
    { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
    { path: 'mudancafase', loadChildren: './mudancafase/mudancafase.module#MudancafasePageModule' },
    { path: 'result-game', loadChildren: './result-game/result-game.module#ResultGamePageModule' },
    { path: 'lanchemanha', loadChildren: './lanchemanha/lanchemanha.module#LanchemanhaPageModule' },
    { path: 'lanchetarde', loadChildren: './lanchetarde/lanchetarde.module#LanchetardePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map