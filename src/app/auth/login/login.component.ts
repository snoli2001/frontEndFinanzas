import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../models/User.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserModel;
  remindMe = false;
  constructor(private auth: AuthService, private router:Router) {
    this.user = new UserModel();
  }

  ngOnInit(): void {
    if(localStorage.getItem('email')){
      this.user.email = localStorage.getItem('email');
      this.remindMe = true;
    }
  }

  login(form: NgForm){
    if( form.invalid){ return; }
    this.auth.login(this.user).subscribe((response: any) => {
      if(this.remindMe){
        localStorage.setItem('email', this.user.email);
      }
      this.router.navigate(['/home']);
    })
  }
}
