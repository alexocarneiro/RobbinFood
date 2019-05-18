import { auth } from 'firebase/app';
import { AuthService } from './../auth.service';
import { UsersService } from './../users.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { User } from 'src/models/user.model';
import { FormGroup, Validators, FormBuilder} from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';






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
  titleImage = '../../assets/logo_robin_food.png'
  loginForm: FormGroup;
 
  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthService,
    private navCtrl : NavController,
    public UsersService: UsersService
    ) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
 
      this.loginForm = formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        password: ['', [Validators.required, Validators.minLength(6)]],
        pontos: [0],
        moeda:[40]
        
      });

      }

  ngOnInit() {
  }
   
 jogar(){
     
     //let loading = this.showLoading();
     let logaUser = this.loginForm.value; 
     let loginuser = this.loginForm.value;
    
     this.authService.createLogin({
      email: loginuser.email,
      password: loginuser.password
    }).then((credentials) => {

      delete loginuser.password;
      let uuid: string = credentials.user.uid;

      this.UsersService.create(loginuser, uuid )
      .then(() => {

      this.navCtrl.navigateForward('tabs/home')
      console.log(this.UsersService.currentUser);
      
      });

    });

  }

  async showLoading() {
    let loading = await this.loadingCtrl.create({
      message: "Aguarde",
    }); 
    return await loading.present();
    //falta o dismiss
  }

}
