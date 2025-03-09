import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router){}

  account!: string;
  password!: string;

  buttonContinue(){


    if (this.account == '0000' && this.password == '0000' ) {
      let user = {
        account: this.account,
        password: this.password
      }
      console.log(user);
      this.router.navigateByUrl('adminpage')
    } else {
      alert('ERROR')
    }
  }
}
