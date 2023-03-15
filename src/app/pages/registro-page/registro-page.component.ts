import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioServicio/usuario.service';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent {

  nombres: string = "";
  apellidos: string = "";
  tipoDocumento: number = 0;
  documento: number = 0;
  email: string = "";
  contrasena: string = "";
  confirmarContrasena: string = "";
  regex: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;



  constructor(private usuarioServicio: UsuarioService, private router: Router) { }

  saveUser() {

    if( this.contrasena.length > 5){
      if(this.regex.test(this.contrasena)){
        if(this.contrasena == this.confirmarContrasena){
          this.usuarioServicio.registerUser(
            this.nombres, this.apellidos, this.tipoDocumento,this.documento,this.email,this.contrasena,
           ).subscribe(result => {
          if(result){
            this.router.navigate(['login']);
          }else{
            alert("Uno o más datos son invalidos");
          }});
        }else{
          alert("Las contraseña y la confirmación de contraseña no coincide");
        }
      }else{
        alert("La contraseña debe tener mayusculas, minusculas y numeros")
      }

    }else{
      alert("La contraseña debe tener minimo 5 caracteres")
    }

}


// goLogin(){
//   this.router.navigate(['login']);
// }

  }

