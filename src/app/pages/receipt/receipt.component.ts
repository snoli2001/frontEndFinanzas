import { Component, OnInit } from '@angular/core';
import {OperationsModel} from "../../models/Operations.model";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {OperationsService} from "../../services/operations.service";
import {Receipt} from "../../models/Receipt.model";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  idClient: number;
  receipt: Receipt;
  accounts: any;
  constructor(private route: ActivatedRoute,private accountService: AccountService,private operationsService:OperationsService) {
    this.idClient = Number(this.route.snapshot.paramMap.get('idClient'));
    this.accounts = accountService.getAccounts(this.idClient).subscribe(response =>{
      this.accounts = response;
      console.log(response);
    })
  }
  ngOnInit(): void {
    this.receipt = new Receipt();
  }

}
