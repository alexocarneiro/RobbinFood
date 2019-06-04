import { Component, OnInit } from '@angular/core';
import { RegrasService } from '../regras.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alimentacao',
  templateUrl: './alimentacao.page.html',
  styleUrls: ['./alimentacao.page.scss'],
})
export class AlimentacaoPage implements OnInit {

  titleImage = '../../assets/logo_robin_food.png'
  cafeManhaCont =0;
  lancheManhaCont =0;
  almocoCont =0;
  lancheTardeCont =0;
  jantarCont =0;

  constructor(
    public regras: RegrasService,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }




  cafeManha() {
    if(this.cafeManhaCont === 0){
    this.regras.addPontosRefeicao(20);
    this.regras.conquistaAlimentacao +=1;
    this.navCtrl.navigateForward('/tabs/cafedamanha')
    } else{
      this.alertaProxRef();
    }
    this.cafeManhaCont ++;
  }

  lancheManha() {
    if(this.lancheManhaCont === 0){
      this.regras.addPontosRefeicao(20);
      this.regras.conquistaAlimentacao +=1;
      this.navCtrl.navigateForward('/tabs/lanchemanha')
      } else{
        this.alertaProxRef();
      }
      this.lancheManhaCont ++;
    }

  almoco() {
    if(this.almocoCont === 0){
      this.regras.addPontosRefeicao(20);
      this.regras.conquistaAlimentacao +=1;
      this.navCtrl.navigateForward('/tabs/almoco')
      } else{
        this.alertaProxRef();
      }
      this.almocoCont ++;
  }

  lancheTarde() {
    if(this.lancheTardeCont === 0){
      this.regras.addPontosRefeicao(20);
      this.regras.conquistaAlimentacao +=1;
      this.navCtrl.navigateForward('/tabs/lanchetarde')
      } else{
        this.alertaProxRef();
      }
      this.lancheTardeCont ++;
    }

  jantar() {
    if(this.jantarCont === 0){
      this.regras.addPontosRefeicao(20);
      this.regras.conquistaAlimentacao +=1;
      this.navCtrl.navigateForward('/tabs/jantar')
      } else{
        this.alertaProxRef();
      }
      this.jantarCont ++;
    }

  async alertaProxRef() {

    let alert = await this.alertCtrl.create({
      header: 'Ops!',
      message: "Robin já fez esta refeição! <br> Fique de olho pro horário da próxima!",
      buttons: ['OK']
    });

    await alert.present();
  }
}


