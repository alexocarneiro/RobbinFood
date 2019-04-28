import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';



@Injectable({
  providedIn: 'root'
})
export class RegrasService {


  

  constructor(

    public users: UsersService

  ) { }

addPontosRefeicao(){

    return this.users.updateUser(40,)

}


addPontosMercado()
{
  //No clique do botão de alguma das refeições adiciona 20 pt nos ponto do usuário no firebase
}

addPontosQuiz(){
//No clique do botão de alguma das refeições adiciona 20 pt nos ponto do usuário no firebase
}

progressGame(){
  //um switc case que tem sua várivel sempre atualizada pelo valor dos pontos do usuário no firebase
  // e ai vai validando cada case para ir mudando de fase e finalizar o joo

}




}
