import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { UserLoginDetail } from '../models/user-login-detail.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userLoginDetail: UserLoginDetail[] = [];
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  constructor(
    private loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  async userLogin() {
    let res: any = await this.loginService.postLoginDetails(this.loginForm.value).toPromise();

    if (res.status == 'ok') {
      this._router.navigateByUrl('/organization');
    } else if (res.status == 404) {
      window.alert('Username or password incorrect');
    }
  }

  resetForm() {
    this.loginForm.reset();
  }

}
