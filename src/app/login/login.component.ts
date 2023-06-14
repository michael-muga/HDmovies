import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errormesg = "";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.username.trim().length === 0){
      this.errormesg = "Username is required";
    }else if (this.password.trim().length === 0){
      this.errormesg = "Password is required";
    }else{
      this.errormesg = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200){
        this.router.navigate(['home']);
      }
      if (res === 403){
        this.errormesg = "Invalid Credentials"
      }
    }
  }

}
