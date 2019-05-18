import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import {  AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: AngularFireList<User[]>;
  currentUser: AngularFireObject<User>;

  constructor(
    private af: AngularFireDatabase,
    public afA: AngularFireAuth
  ) {

   this.users = this.af.list('/users') ;
   this.listenAuthState();

   }
   
    private listenAuthState(){
      
      this.afA.authState
      .subscribe(() =>{
        if(this.afA.authState){
          this.currentUser = this.af.object(`/users/${this.afA.authState.uid}`)
        }
      });
    }

    create(user: User, uuid: string) {

      return this.af.object(`/users/${uuid}`).
      set(user);

     /* return this.users
      .push(user);*/

    }


}
