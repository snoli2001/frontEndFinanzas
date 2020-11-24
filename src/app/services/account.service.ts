import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Maintenance} from "../models/maintenance";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url = 'http://localhost:8000/api'
  constructor(private http: HttpClient) {
  }
  // clients/<int:client_id>/maintenances/<int:maintenance_id>/line_credit/<int:line_of_credit_id>/accounts/
  newAccount(clientId: number,maintenanceId: number,lineOfCreditId: number){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    console.log(httpHeaders);
    return this.http
      .post(`${this.url}/clients/${clientId}/maintenances/${maintenanceId}/line_credit/${lineOfCreditId}/accounts/`
        , {} ,{headers: httpHeaders})
  }

  getAccounts(clientId: number){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get(`${this.url}/clients/${clientId}/accounts/`,{headers: httpHeaders})
  }
}
