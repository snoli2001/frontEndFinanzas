import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Receipt} from "../models/Receipt.model";



@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  private url = 'http://localhost:8000/api';
  constructor(private http: HttpClient) {
  }

  createReceipt(accountId: number,receipt: Receipt ){
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`
    });
    return this.http.post(`${this.url}/accounts/${accountId}/receipts/`,receipt,{headers: httpHeaders});
  }

}
