import { Component, OnInit } from '@angular/core';
import {Maintenance} from "../../models/maintenance";
import {NgForm} from "@angular/forms";
import {MantenimientoService} from "../../services/mantenimiento.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  maintenance: Maintenance
  constructor(private mantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
    this.maintenance = new Maintenance();
  }

  newMaintenance(form: NgForm){
    if(form.invalid){return}
    this.mantenimientoService.newMaintenance(this.maintenance).subscribe(response=>{
      console.log(response);
      Swal.fire({
        title: 'Un Éxito',
        text: 'Nuevo mantenimiento creado',
        icon: 'success',
        allowOutsideClick: false
      })
    })
  }

}
