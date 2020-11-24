import { Component, OnInit } from '@angular/core';
import {Client} from "../../models/Client";
import {NgForm} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  client: Client;
  Id: number;
  constructor(private clientService: ClientService) {

  }

  ngOnInit(): void {
    this.client = new Client();
    this.Id = Number(localStorage.getItem('Id'));
  }

  newClientSubmit(form: NgForm): void{
    if(form.invalid){return;}
    this.clientService.newClient(this.Id,this.client).subscribe(response => {

      Swal.fire({
        title: 'Un Éxito',
        text: 'Nuevo cliente creado',
        icon: 'success',
        allowOutsideClick: false
      })
    })
  }

}
