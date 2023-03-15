import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioServicio/usuario.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = "";
  password: string = "";

  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  login() {
    this.usuarioServicio.loginuser(this.email, this.password).subscribe(result => {
      if (result) {
        this.router.navigate(['home']);
      }else {
        alert("El correo o la contraseña no son validos");
      }
    });
  }

  goRegister(){
    this.router.navigate(['registro']);
  }

}




