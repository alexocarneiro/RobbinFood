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
        path: '',
        redirectTo: '/tabs/mercado',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mercado',
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
