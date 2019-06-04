import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { RegrasService } from '../regras.service';

@Component({
  selector: 'app-result2',
  templateUrl: './result2.page.html',
  styleUrls: ['./result2.page.scss'],
})
export class Result2Page implements OnInit {

  titleImage = '../../assets/logo_robin_food.png'
  RobbinImage = '../../assets/robin_04.png'
  CestaVazia = '../../assets/cesta_vazia.png'

  constructor(
    public navCtrl: NavController,
    public regras: RegrasService,
    public alertCtrl: AlertController

  ) {
    this.cestaVazia();

   }

  ngOnInit() {
  }

  continue(){
    
    this.navCtrl.navigateForward('tabs/home')
  }

  async cestaVazia(){
    let alert = await this.alertCtrl.create({
      header: 'Cesta Vazia!',
      message: "As escolhas não foram boas. <br> Robin não conseguiu enviar os alimentos para ajudar o vilarejo.",
      buttons:['OK']
    });

    await alert.present();
  }

}
