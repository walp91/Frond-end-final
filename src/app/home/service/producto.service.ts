import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto.inteface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

private apiUrl: string = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) { }

  buscarProducto(termino: string): Observable<Producto[]> {

    const url = `${this.apiUrl}/${termino}`;

    return this.http.get<Producto[]>(url);

  }

  buscarProductoHombre(termino: string): Observable<Producto[]> {

    const url = `${this.apiUrl}/hombre/${termino}`;

    return this.http.get<Producto[]>(url);

  }

  buscarProductoMujer(termino: string): Observable<Producto[]> {

    const url = `${this.apiUrl}/mujer/${termino}`;

    return this.http.get<Producto[]>(url);

}

}
