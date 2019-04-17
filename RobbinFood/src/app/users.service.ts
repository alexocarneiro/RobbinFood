import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: AngularFireList<User>;

  constructor(
    private af: AngularFireDatabase

  ) {

    this.users = af.list('/users') ;

   }

    create(user: User) {

      return this.users
      .push(user);

    }


}
