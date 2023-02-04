import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  url = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }

  getEstudiantes(){
    return this.http.get<Estudiante[]>(this.url);
  }

  deleteUser(estudiante:Estudiante): Observable<any>{
    return this.http.delete(this.url + estudiante._id);
  }

  guardarEstudiante(estudiante:Estudiante): Observable<any> {
    return this.http.post(this.url, estudiante);
  }

  actualiEstudiante(estudiante:Estudiante): Observable<any> {
    return this.http.post(this.url, estudiante);
  }

  updateEstudiante(estudiante:Estudiante){
    return this.http.put<Estudiante>(this.url+estudiante._id,estudiante);
  }

  

  getbyUser(id:string): Observable<any>{
    return this.http.get<Estudiante>(this.url+"/byid/"+id);
  }

} 
