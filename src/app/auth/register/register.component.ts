import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/User.model'
import {NgForm} from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import {Router} from "@angular/router";
import Swal from "sweetalert2"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  company: UserModel;
  remindMe = false;
  constructor(private auth: AuthService, private router: Router ) {

  }

  ngOnInit(): void {
    this.company = new UserModel();
  }

  onSubmit(form: NgForm) {
    if( form.invalid) {return; }
    this.auth.newUser(this.company).subscribe(response => {
      console.log(response);
      Swal.fire({
        title: 'Espere',
        text: 'Nuevo cliente creado',
        icon: 'success',
        allowOutsideClick: false
      })
    })
    this.router.navigateByUrl('/login')
  }

}
