import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { RegrasService } from '../regras.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  titleImage = '../../assets/logo_robin_food.png'
  RobbinImage = '../../assets/robin_01.png'

  constructor(

    public navCtrl: NavController,
    public regras: RegrasService

  ) { }

  ngOnInit() {
  }

  continue(){
    this.regras.ganhaDinheiro(),
    this.navCtrl.navigateForward('tabs/home')
  }

}
