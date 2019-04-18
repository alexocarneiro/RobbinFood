import { UsersService } from './../users.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {
  inputValue;
  inputEmailValue
  inputSenhaValue
  RobbinImage = '../../assets/robin_01.png'
  

  constructor(
   
    private navCtrl : NavController,
    public UsersService: UsersService
    ) {

     

      }

  ngOnInit() {
  }
   

  

  jogar(){

    let users = new User(this.inputValue,this.inputEmailValue,this.inputSenhaValue,'1','100','0');

    //código de criação de cadastro Firebase
    this.UsersService.create(users);
    this.navCtrl.navigateForward('tabs/home')
    

  }

}
