import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../models/Client";
import {Maintenance} from "../models/maintenance";

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private url = 'http://localhost:8000/api'
  constructor(private http: HttpClient) {
  }

  newMaintenance(maintenance: Maintenance){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    console.log(httpHeaders);
    return this.http.post(`${this.url}/maintenances/`,maintenance,{headers: httpHeaders})
  }

  getMaintenance(){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get(`${this.url}/maintenances/`,{headers: httpHeaders})
  }

}
