import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from './models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  saveNewUser(userProfile: UserProfile){
    return this.http.post('http://localhost:3001/users', userProfile);
  }
}
