import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Maintenance} from "../models/maintenance";
import {LineOfCreditModel} from "../models/LineOfCredit.model";

@Injectable({
  providedIn: 'root'
})
export class LineOfCreditsService {


  private url = 'http://localhost:8000/api'
  constructor(private http: HttpClient) {
  }

  newLineOfCredit(lineCredit: LineOfCreditModel){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    console.log(httpHeaders);
    return this.http.post(`${this.url}/linecredits/`,lineCredit,{headers: httpHeaders})
  }

  getMaintenance(){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get(`${this.url}/maintenances/`,{headers: httpHeaders})
  }
}
