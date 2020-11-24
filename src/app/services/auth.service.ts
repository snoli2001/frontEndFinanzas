import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/User.model";
import {map} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8000/api'
  userToken: any;
  jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient) {
    this.readToken();
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('Id');
    localStorage.removeItem('expires');
  }

  newUser(user: UserModel){
      return this.http.post(`${this.url}/users/`, user);
  }

  login(user: UserModel){
    const authData = {
      email: user.email,
      password: user.password
    };
    return  this.http.post(`${this.url}/login/`,authData,
      { observe: 'response' })
      .pipe(
        map((response: any) => {
          if (response) {
            const token = response.body.access;
            localStorage.setItem('token', token);
            this.userToken = this.jwtHelper.decodeToken(token);
            const helper = new JwtHelperService();

            const decodedToken = helper.decodeToken(token);
            const expirationDate = helper.getTokenExpirationDate(token);
            const isExpired = helper.isTokenExpired(token);
            localStorage.setItem('Id', decodedToken.user_id);
          }
        })
      );
  }



  readToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  isAuthenticated(){
    if( this.userToken.length < 2 ){
      return false;
    }

    const expires = Number(localStorage.getItem('expires'));
    const expiresDate = new Date();

    expiresDate.setTime(expires);
    if ( expiresDate > new Date()){
      return true;
    }else {
      return false;
    }
  }


}
