import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegrasService } from '../regras.service';

@Component({
  selector: 'app-result2',
  templateUrl: './result2.page.html',
  styleUrls: ['./result2.page.scss'],
})
export class Result2Page implements OnInit {

  titleImage = '../../assets/logo_robin_food.png'
  RobbinImage = '../../assets/robin_04_2.png'

  constructor(
    public navCtrl: NavController,
    public regras: RegrasService

  ) { }

  ngOnInit() {
  }

  continue(){
    this.regras.ganhaDinheiro();
    this.navCtrl.navigateForward('tabs/home')
  }

}
