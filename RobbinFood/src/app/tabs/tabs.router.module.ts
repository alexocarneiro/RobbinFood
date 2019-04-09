import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
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
        path: 'colacao-i',
        children: [
          {
            path: '',
            loadChildren: '../colacao-i/colacao-i.module#ColacaoIPageModule'
          }
        ]
      },

      {
        path: 'colacao-ii',
        children: [
          {
            path: '',
            loadChildren: '../colacao-ii/colacao-ii.module#ColacaoIIPageModule'
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

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
