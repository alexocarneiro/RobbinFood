import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CafedamanhaPage } from './cafedamanha.page';

const routes: Routes = [
  {
    path: '',
    component: CafedamanhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CafedamanhaPage]
})
export class CafedamanhaPageModule {}
