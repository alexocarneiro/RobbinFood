import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class RegrasService {

  ptGame = 1000;
  dinheiroMercado = 40;

  constructor(

    public userService: UsersService,
    public af: AngularFireDatabase

  ) {

    }

  addPontosRefeicao(ptRefeicao){
    this.ptGame -= ptRefeicao;

  } 

  compraMercado(){
    this.dinheiroMercado -=1;
  }

  ganhaDinheiro(){
    this.dinheiroMercado +=20;
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
