import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usernameModel: string | undefined;
  passwordModel: string | undefined;
  successMessage = '';
  
  onSubmit() {
    if (this.usernameModel && this.passwordModel) {
      this.successMessage = 'Successfully logged in';
    }
  }
}
