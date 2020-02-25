import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../model/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user_info: User[] = [];
  updated:boolean = false;

  constructor(
    private userService: UserService,
  ) {
   }

  user_info_edit_form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  ngOnInit() {
    this.getCurrentUserId();
    this.getUserbyId(this.getCurrentUserId());
  }


  getCurrentUserId() {
    let user = localStorage.getItem('currentUser');
    if (user !== null) {
      let id: number = JSON.parse(user).id;
      return id;
    }
    return null;
  }

  getUserbyId(id) {
    console.log('from getUserById');
    this.userService.getUserById(this.getCurrentUserId())
      .subscribe((response: any) => {
        if (response.status == 'ok') {
          console.log('response of get user by id ', response);
          this.user_info.push(response.user[0]);
        }
      }, error => {
        console.log('Error', error);
      })
  }

  populateForm() {
    let userInfo = this.user_info[0];
    this.user_info_edit_form.patchValue({ firstName: userInfo.firstName });
    this.user_info_edit_form.patchValue({ lastName: userInfo.lastName });
    this.user_info_edit_form.patchValue({ email: userInfo.email });
  }

   editUserInfo(id: number) {
    console.log('edit user form submitted', this.user_info_edit_form.value);
    this.userService.updateUser(this.getCurrentUserId(),this.user_info_edit_form.value )
    .subscribe((res:any)=>{
      console.log('response ', res);
      console.log(this.user_info);
      this.user_info.pop();
      this.getUserbyId(this.getCurrentUserId());
      this.updated = true;
      console.log(this.user_info);
    },
    (error)=>{
      console.log('error', error);
    }
    )
  }


  
}
