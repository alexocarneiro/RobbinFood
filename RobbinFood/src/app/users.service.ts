import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import {  AngularFireList, AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: AngularFireList<User[]>;

  constructor(
    private af: AngularFireDatabase
  ) {

   this.users = this.af.list('/users') ;

   }

    create(user: User) {

      return this.af.object(`/users/${user.uid}`).
      set(user);

     /* return this.users
      .push(user);*/

    }


}
