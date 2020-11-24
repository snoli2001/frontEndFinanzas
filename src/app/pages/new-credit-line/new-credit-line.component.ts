import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import { LineOfCreditModel} from "../../models/LineOfCredit.model";
import {ActivatedRoute} from "@angular/router";
import {MantenimientoService} from "../../services/mantenimiento.service";
import {Maintenance} from "../../models/maintenance";
import {Client} from "../../models/Client";
import {ClientService} from "../../services/client.service";
import {LineOfCreditsService} from "../../services/line-of-credits.service";
import Swal from "sweetalert2";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-new-credit-line',
  templateUrl: './new-credit-line.component.html',
  styleUrls: ['./new-credit-line.component.css']
})
export class NewCreditLineComponent implements OnInit {

  id: number;
  maintenances: Maintenance[] = [];
  clients: Client[];
  line: LineOfCreditModel;
  clientid: number;
  lineOfCreditid: number;
  mantenanceId: number;

  constructor( private mantenimientoService: MantenimientoService,
               private clientService: ClientService,
               private lineOfCreditsService: LineOfCreditsService,
               private accountService: AccountService) {
    this.id = Number(localStorage.getItem("Id"));
  }

  ngOnInit(): void {

    this.mantenimientoService.getMaintenance().subscribe((response:Maintenance[]) => {
      this.maintenances = response;
    })

    this.clientService.getClients(this.id).subscribe((response: Client[]) =>{
      this.clients = response;
    })
    this.line = new LineOfCreditModel();
    this.line.frequency = 1;
  }

  newLineOfCredit(form: NgForm){
    if(form.invalid){return;}
    this.lineOfCreditsService.newLineOfCredit(this.line).subscribe((response: LineOfCreditModel) =>{
      this.lineOfCreditid = response.id;
      this.accountService.newAccount(this.clientid, this.mantenanceId, this.lineOfCreditid).subscribe(response => {
        Swal.fire({
          title: 'Un Éxito',
          text: 'Nuevo Linea de crédito asignada',
          icon: 'success',
          allowOutsideClick: false
        })
      })
    })
  }



}
