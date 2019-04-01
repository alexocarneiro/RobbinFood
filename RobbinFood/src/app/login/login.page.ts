import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  inputValue: string; 

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }


  jogar(){

    //código de criação de cadastro Firebase
    console.log(this.inputValue);

    this.navCtrl.navigateForward('home')
    

  }

}
