import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private https: HttpClient, private router: Router) { }

  page: number = 1;
  id: string = "";
  idFinal: any;
  user: any;

  //Función para obtener la lista de usuario de la base de datos
  getUsers(page: number){
    return this.https.get<any>("https://reqres.in/api/users?page=" + page);
  }

  //Función para obtener la información del usuario seleccionado en la página "home"
  mostrarUsuario(id: string){
    this.idFinal = localStorage.getItem("id");
    return this.https.get<any>("https://reqres.in/api/users/" + this.idFinal).subscribe(
      response => {
        this.user = response.data;
      }
    )
  }
}
