import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private endPoint: HttpClient) { }

  loginuser(username: string, contrasena: string) {
    return this.endPoint.post('http://localhost:8080/user/login', { "email": username, "contrasena": contrasena });
  }

  registerUser(nombres: string, apellidos: string, tipoDocumento: number, documento: number, email: string, contrasena: string) {
    return this.endPoint.post('http://localhost:8080/user/save', 
    {
      "nombres": nombres, "apellidos": apellidos, "documento": documento,
      "idTipoDocumento": tipoDocumento, "email": email, "contrasena": contrasena
    });

  }
}
