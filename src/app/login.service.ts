import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginDetail } from './models/user-login-detail.model';
import * as moment from "moment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  getLoginDetail(){
    return this.http.get('http://localhost:3001/api/user-login-details');
  }

  postLoginDetails(userLoginDetail: UserLoginDetail){
    return this.http.post('http://localhost:3001/user-login-details/authenticate', userLoginDetail)
    .pipe(map(res=>{

    }))
  }

  

}
