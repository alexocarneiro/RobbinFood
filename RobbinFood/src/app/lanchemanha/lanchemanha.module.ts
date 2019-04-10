import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LanchemanhaPage } from './lanchemanha.page';

const routes: Routes = [
  {
    path: '',
    component: LanchemanhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LanchemanhaPage]
})
export class LanchemanhaPageModule {}
