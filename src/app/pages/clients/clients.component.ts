import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/Client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = []
  id: number;
  constructor(private clientService: ClientService, private router: Router) {

  }

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('Id'));
    this.clientService.getClients(this.id).subscribe((response: Client[]) =>{
      this.clients = response;
    })
  }

  clientOperations(idClient: number): void{
    this.router.navigate(['operations', idClient]);
  }

  pay(idClient: number): void{
    this.router.navigate(['receipt', idClient]);
  }



}
