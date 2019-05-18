import { Component, OnInit } from '@angular/core';
import { RegrasService } from '../regras.service';

@Component({
  selector: 'app-alimentacao',
  templateUrl: './alimentacao.page.html',
  styleUrls: ['./alimentacao.page.scss'],
})
export class AlimentacaoPage implements OnInit {

  titleImage = '../../assets/logo_robin_food.png'

  constructor(
    public regras: RegrasService

  ) { }

  ngOnInit() {
  }


  alimenta(){
    this.regras.addPontosRefeicao(20);
    console.log(this.regras.ptGame)
  }

}
