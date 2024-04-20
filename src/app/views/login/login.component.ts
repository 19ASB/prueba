import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: String = '';
  password: String = '';
  passwordType: String = 'password';
  showPassword: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  //Función para realizar el login en la aplicacion
  login():void{
    this.authService.login(this.email, this.password).subscribe(
      response => {
        this.router.navigate(['/home']);
      }
    );
  }

  //Función para mostrar la contraseña en la pantalla de "login"
  mostrar(){
    this.showPassword = !this.showPassword;
    this.passwordType = this.showPassword ? 'text' : 'password';
  }
}
