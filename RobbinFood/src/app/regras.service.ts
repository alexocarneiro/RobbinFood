import { AlertController } from '@ionic/angular';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class RegrasService {

  ptGame = 1000;
  ptGanhos = 0;
  dinheiroMercado = 40;
  conquistaAlimentacao;
  ptAlimentacaoDia =0;

  constructor(

    public userService: UsersService,
    public af: AngularFireDatabase,
    public alertCtrl: AlertController

  ) {

    }

  addPontosRefeicao(ptRefeicao){
    this.ptGanhos += ptRefeicao;

  } 

  compraMercado(){
    this.dinheiroMercado -=1;
  }

  ganhaDinheiro(){
    this.dinheiroMercado +=20;
  }

  
 async todasRefeicoesCertas(){
    let alert = await this.alertCtrl.create({
      header: 'Maravilha!',
      message: "Robin fez todas as refeições na hora certa! <br> E que ótimo só alimentos saudáveis.<br> Ganhou 100 pontos!",
      buttons: ['OK']
    });

    await alert.present();
  }

  async todasRefeicoesErradas(){
    let alert = await this.alertCtrl.create({
      header: 'Maravilha!',
      message: "Robin fez todas as refeições na hora certa! <br> Uma pena que nem todos alimentos eram saudáveis.",
      buttons: ['OK']
    });

    await alert.present();
  }



  addPontosMercado(ptMercado) 
  {
    this.ptGame -= ptMercado 
  }

  

  addPontosQuiz(ptQuiz){
    this.ptGame -= ptQuiz
    
  }

  getAttributesUser(user,op): AngularFireList<User> {
    return <AngularFireList<User>><unknown>this.af.object(`/users/${user}/${op}`)
  }

}
