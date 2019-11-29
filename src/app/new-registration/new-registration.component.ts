import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  newRegistrationForm = new FormGroup({
    first_name: new FormControl(''),
    middle_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private userRegisrationService: UserRegistrationService
  ) { }

  ngOnInit() {
  }

  newUser() {
    this.userRegisrationService.saveNewUser(this.newRegistrationForm.value)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.newRegistrationForm.reset();
        },
        error => {
          console.log('Error', error);
        }
      )

  }

}
