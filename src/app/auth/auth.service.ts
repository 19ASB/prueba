import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private https: HttpClient, private router: Router) { }

  //Función para realizar el login en la aplicación
  login(email: String, password: String):Observable<any>{
    return this.https.post<any>("https://reqres.in/api/login", { email, password });
  }

  //Función para cerrar la sesión en la aplicación
  logOut(){
    localStorage.clear();
    this.router.navigate([""]);
  }
}