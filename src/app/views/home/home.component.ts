import { Component } from '@angular/core';
import { ServiceService } from '../../auth/service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, NavbarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: any;
  actualPage: number = 1;
  paginasTotales: number = 0;
  userPage: number = 0;

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit():void{
    this.getUsers(1);
    this.actualPage = 1;
  }

  //Función para obtener los datos de los usuarios y las páginas que existen
  getUsers(page: number):void{
    this.service.getUsers(page).subscribe(
      res => {
        if(res){
          this.actualPage = res.page;
          this.users = res.data;
          this.paginasTotales = res.total_pages;
        }
      }
    )
  }

  //Función para ir a la página siguiente, comprueba en que página está por si se encuentra en la página final
  siguiente():void{
    if(this.actualPage != this.paginasTotales){
      this.getUsers(this.actualPage + 1)
    }
  }

  //Función para ir a la página anterior, comprueba en que página se encuentra por sí esta en la pagina 1
  anterior():void{
    if(this.actualPage != 1){
      this.getUsers(this.actualPage - 1);
    }
  }

  //Función para ir a la página 1
  paginaUno():void{
    if(this.actualPage != 1){
      this.getUsers(1);
    }
  }

  //Función para ir a la página 2
  paginaDos():void{
    if(this.actualPage != 2){
      this.getUsers(2);
    }
  }

  //Función para ir a la página donde se muestran los datos del usuario seleccionado
  //Guarda el id del usuario seleccionado para cargar los datos en la página "user"
  usuario(userId: any ){
    localStorage.setItem("id", userId);
    this.router.navigate(["/user"]);
  }
}
