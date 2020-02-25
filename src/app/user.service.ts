import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) {

  }


  getUsers() {
    return this.http.get(this.baseUrl + '/user');
  }

  // getUserById(id) {
  //   // let user = localStorage.getItem('currentUser');
  //   // let token = JSON.parse(user).token.toString();
  //   let token = this.getToken();
  //   console.log('id', id);
  //   return this.http.get('http://localhost:3001/user/' + id, {
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     }
  //   });
  // }

  getUserById(id) {
    return this.http.get(this.baseUrl + '/user/' + id);
  }

  postUser(user: User) {
    return this.http.post(this.baseUrl + '/user/create', user);
  }

  updateUser(id, user: User) {
    return this.http.put(this.baseUrl + '/user/' + id, user);
  }

}
