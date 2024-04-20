import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServiceService } from '../../auth/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ NavbarComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id: any;
  user: any;

  constructor(private service: ServiceService, private route: Router) {}

  ngOnInit():void{
    this.id = localStorage.getItem("id")
    this.service.mostrarUsuario(this.id);
    setTimeout(() => {
      this.user = this.service.user;
    }, 250);
  }

  //Función para volver a la pantalla de lista de usuarios (home)
  volver(){
    this.route.navigate(["/home"]);
  }
}
