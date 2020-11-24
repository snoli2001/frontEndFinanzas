import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../models/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://localhost:8000/api'
  constructor(private http: HttpClient) {
  }

  newClient(userId: number, client: Client){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    console.log(httpHeaders);
    return this.http.post(`${this.url}/users/${userId}/clients/`,client, {headers: httpHeaders})
  }

  getClients(userId: number){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.get(`${this.url}/users/${userId}/clients/`, {headers: httpHeaders})
  }

}
