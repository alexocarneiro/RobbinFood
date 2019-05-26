import { Component, OnInit } from '@angular/core';
import { RegrasService } from '../regras.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alimentacao',
  templateUrl: './alimentacao.page.html',
  styleUrls: ['./alimentacao.page.scss'],
})
export class AlimentacaoPage implements OnInit {

  titleImage = '../../assets/logo_robin_food.png'

  constructor(
    public regras: RegrasService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }


  

  cafeManha(){
    this.regras.addPontosRefeicao(20);
    this.navCtrl.navigateForward('/tabs/cafedamanha')
  }

  lancheManha(){
    this.regras.addPontosRefeicao(20);
    this.navCtrl.navigateForward('/tabs/lanchemanha')
  }

  almoco(){
    this.regras.addPontosRefeicao(20);
    this.navCtrl.navigateForward('/tabs/almoco')
  }

  lancheTarde(){
    this.regras.addPontosRefeicao(20);
    this.navCtrl.navigateForward('/tabs/lanchetarde')
  }

  jantar(){
    this.regras.addPontosRefeicao(20);
    this.navCtrl.navigateForward('/tabs/jantar')
  }

}
