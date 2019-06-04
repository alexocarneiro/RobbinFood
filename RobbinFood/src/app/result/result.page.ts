import { NavController, AlertController } from '@ionic/angular';
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
  CestaCheia = '../../assets/cesta.png'

  constructor(

    public navCtrl: NavController,
    public regras: RegrasService,
    public alertCtrl: AlertController

  ) {
    this.cestaCheia();

   }

  ngOnInit() {
  }

  continue(){
    
    this.navCtrl.navigateForward('tabs/home')
  }

  async cestaCheia(){
    let alert = await this.alertCtrl.create({
      header: 'Cesta Cheia!',
      message: "Você acabou de enviar uma cesta cheia de alimentos para o vilarejo <br> Robin ganhou energia extra! <br> Continue enviando alimentos até que o Vilarejo seja salvo",
      buttons:['OK']
    });

    await alert.present();
  }

}
