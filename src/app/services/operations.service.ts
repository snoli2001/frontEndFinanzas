import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Maintenance} from "../models/maintenance";
import {OperationsModel} from "../models/Operations.model";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private url = 'http://localhost:8000/api'
  constructor(private http: HttpClient) {
  }

  newOperation(accountId: number, operation: OperationsModel){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.post(`${this.url}/accounts/${accountId}/operations/`,
      operation,{headers: httpHeaders});
  }

  getOperationsByAccounts(accountId: number){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.post(`${this.url}/accounts/${accountId}/operations/`,{headers: httpHeaders});
  }


}
