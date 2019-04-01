import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'alimentacao', loadChildren: './alimentacao/alimentacao.module#AlimentacaoPageModule' },
  { path: 'cafedamanha', loadChildren: './cafedamanha/cafedamanha.module#CafedamanhaPageModule' },
  { path: 'colcacao-i', loadChildren: './colcacao-i/colcacao-i.module#ColcacaoIPageModule' },
  { path: 'colcacao-ii', loadChildren: './colcacao-ii/colcacao-ii.module#ColcacaoIIPageModule' },
  { path: 'almoco', loadChildren: './almoco/almoco.module#AlmocoPageModule' },
  { path: 'jantar', loadChildren: './jantar/jantar.module#JantarPageModule' },
  { path: 'result-alimentacao', loadChildren: './result-alimentacao/result-alimentacao.module#ResultAlimentacaoPageModule' },
  { path: 'mercado', loadChildren: './mercado/mercado.module#MercadoPageModule' },
  { path: 'quiz', loadChildren: './quiz/quiz.module#QuizPageModule' },
  { path: 'mudancafase', loadChildren: './mudancafase/mudancafase.module#MudancafasePageModule' },
  { path: 'result-game', loadChildren: './result-game/result-game.module#ResultGamePageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
