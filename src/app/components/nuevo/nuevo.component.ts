import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  estudianteForm: FormGroup;
  titulo = 'NUEVO ESTUDIANTE';
  

  constructor(private fb: FormBuilder,private router:Router,
    private _estudianteService:EstudianteService) {
    this.estudianteForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      not1: ['', Validators.required],
      not2: ['', Validators.required],
      not3: ['', Validators.required],

    })
      
   }

  ngOnInit(): void {
  
  }

nuevo() {

  const ESTUDIANTE: Estudiante = {
    nombres: this.estudianteForm.get('nombres')?.value,
    apellidos: this.estudianteForm.get('apellidos')?.value,
    email: this.estudianteForm.get('email')?.value,
    not1: this.estudianteForm.get('not1')?.value,
    not2: this.estudianteForm.get('not2')?.value,
    not3: this.estudianteForm.get('not3')?.value,
    
  }
  console.log(ESTUDIANTE);
  this._estudianteService.guardarEstudiante(ESTUDIANTE).subscribe(data=>{
    alert("Datos almacenados!");
    this.router.navigate([""]);
    this.estudianteForm.reset();
  })
  }


}



