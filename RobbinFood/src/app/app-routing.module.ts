import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  { path: 'lanchemanha', loadChildren: './lanchemanha/lanchemanha.module#LanchemanhaPageModule' },
  { path: 'lanchetarde', loadChildren: './lanchetarde/lanchetarde.module#LanchetardePageModule' },
  { path: 'result', loadChildren: './result/result.module#ResultPageModule' },
  { path: 'result2', loadChildren: './result2/result2.module#Result2PageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
