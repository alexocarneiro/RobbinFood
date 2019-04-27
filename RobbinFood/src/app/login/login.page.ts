import { AuthService } from './../auth.service';
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
    public authService: AuthService,
    private navCtrl : NavController,
    public UsersService: UsersService
    ) {

     

      }

  ngOnInit() {
  }
   
  jogar(){

    let users = new User(this.inputValue,this.inputEmailValue,this.inputSenhaValue,'1','100','0');
    
  this.authService.createLogin({
      email: users.email,
      password: users.password
    }).then(() => {

      this.UsersService.create(users);
      this.navCtrl.navigateForward('tabs/home')

    });

    
    /*this.UsersService.create(users);
    this.navCtrl.navigateForward('tabs/home')*/

  }

}
