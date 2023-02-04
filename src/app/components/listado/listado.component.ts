import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {
  listEstudiantes!: Estudiante[];
   
  constructor(private _listadoService: EstudianteService, private router:Router) {}

  ngOnInit() {
    this.obtenerListados();
  }

    obtenerListados() {      
      this._listadoService.getEstudiantes().subscribe(data=>{
        this.listEstudiantes=data;
       
      }); 

    }

    actualizar(listEstudiantes:Estudiante){
      localStorage.setItem("id",listEstudiantes._id!.toString());
      this.router.navigate(["actualizar/:id"]);
    }

    Delete(listEstudiantes:Estudiante){
      this._listadoService.deleteUser(listEstudiantes).subscribe(data=>{
        this.listEstudiantes=this.listEstudiantes.filter(p=>p!==listEstudiantes);
        alert("Datos Eliminados con éxito!");
      });
  
    }
  }
