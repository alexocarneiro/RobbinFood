import { FoodsService } from './../foods.service';
import { Food } from './../../models/food.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireList } from 'angularfire2/database';



@Component({
  selector: 'app-jantar',
  templateUrl: './jantar.page.html',
  styleUrls: ['./jantar.page.scss'],
})
export class JantarPage implements OnInit {

  RobbinImage = '../../assets/robin_01.png';
  foods: AngularFireList<Food[]>;

  /*arrayImages = [
    { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1'},
    { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2'},
    { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3'},
  ];*/

  arrayImages = []

  constructor(
    
    public foodService: FoodsService,
    private navCtrl: NavController
    
    ) { }

  ngOnInit() {
  }


 

  jogar(){

    //código de criação de cadastro Firebase
    

    this.navCtrl.navigateForward('tabs/home')
  }


}
