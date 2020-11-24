import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OperationsModel} from "../../models/Operations.model";
import {AccountService} from "../../services/account.service";
import {OperationsService} from "../../services/operations.service";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  idClient: number;
  operation: OperationsModel;
  accounts: any;
  accountId: number;
  constructor(private route: ActivatedRoute,private accountService: AccountService,private operationsService:OperationsService) {
    this.idClient = Number(this.route.snapshot.paramMap.get('idClient'));
  }

  ngOnInit(): void {
    this.accountService.getAccounts(this.idClient).subscribe(response => {
      console.log(response);
      this.accounts = response;
    })
    this.operation = new OperationsModel();
  }

  newOperation(form: NgForm){
    if(form.invalid){return;}
    this.operationsService.newOperation(this.operation.account_id, this.operation).subscribe(response =>{
      Swal.fire({
        title: 'Un Éxito',
        text: 'Nuevo cliente creado',
        icon: 'success',
        allowOutsideClick: false
      })
    })
  }



}
