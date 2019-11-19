import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectUser: User = {
    fullName: 'hamza',
    email: 'bh@gmail.com',
    password: ''
  }

  constructor() { }
}
