import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ AngularFireModule, FirebaseAppConfig} from 'angularfire2';

const firebaseAppConfig: FirebaseAppConfig ={
  apiKey: "AIzaSyD6Cb7tXPHmKOLB-T1SgVhZYpU8Qv5vr7Q",
  authDomain: "robin-food-firebase.firebaseapp.com",
  databaseURL: "https://robin-food-firebase.firebaseio.com",
  projectId: "robin-food-firebase",
  storageBucket: "",
  messagingSenderId: "24330502750"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseAppConfig)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
