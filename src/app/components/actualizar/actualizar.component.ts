import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
  estudiante: Estudiante = new Estudiante();

  constructor(private router:Router,
    private _estudianteService:EstudianteService, private aRouter: ActivatedRoute ) {
  
    
   }

   ngOnInit(): void {
    this.Editar();
   }

   Editar(){
    let id=localStorage.getItem("id");
    console.log(id)
    this._estudianteService.getbyUser(id!).subscribe(data=>{
    this.estudiante=data;
    console.log(this.estudiante)
      
    })
  }

  Actualizar(){
    this._estudianteService.updateEstudiante(this.estudiante).subscribe(data=>{
      this.estudiante=data;
      alert("Se actualizo con exito!!!!");
      this.router.navigate([""])
    })
  }
   
}
