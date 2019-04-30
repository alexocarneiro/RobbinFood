import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'mercado',
                children: [
                    {
                        path: '',
                        loadChildren: '../mercado/mercado.module#MercadoPageModule'
                    }
                ]
            },
            {
                path: 'alimentacao',
                children: [
                    {
                        path: '',
                        loadChildren: '../alimentacao/alimentacao.module#AlimentacaoPageModule'
                    }
                ]
            },
            {
                path: 'quiz',
                children: [
                    {
                        path: '',
                        loadChildren: '../quiz/quiz.module#QuizPageModule'
                    }
                ]
            },
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'cafedamanha',
                children: [
                    {
                        path: '',
                        loadChildren: '../cafedamanha/cafedamanha.module#CafedamanhaPageModule'
                    }
                ]
            },
            {
                path: 'lanchemanha',
                children: [
                    {
                        path: '',
                        loadChildren: '../lanchemanha/lanchemanha.module#LanchemanhaPageModule'
                    }
                ]
            },
            {
                path: 'almoco',
                children: [
                    {
                        path: '',
                        loadChildren: '../almoco/almoco.module#AlmocoPageModule'
                    }
                ]
            },
            {
                path: 'lanchetarde',
                children: [
                    {
                        path: '',
                        loadChildren: '../lanchetarde/lanchetarde.module#LanchetardePageModule'
                    }
                ]
            },
            {
                path: 'jantar',
                children: [
                    {
                        path: '',
                        loadChildren: '../jantar/jantar.module#JantarPageModule'
                    }
                ]
            },
            {
                path: 'quiz',
                children: [
                    {
                        path: '',
                        loadChildren: '../quiz/quiz.module#QuizPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        // redirectTo: '/tabs/mercado',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map