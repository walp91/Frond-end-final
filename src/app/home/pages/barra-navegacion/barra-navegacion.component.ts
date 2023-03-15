import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../interface/producto.inteface';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {
  termino: string = "";
  hayError: boolean = false;
  productos: Producto[] = [];
  verLogin: boolean = false;
  verLogout: boolean = true;

  constructor(private productoService: ProductoService, private router: Router){}

  buscar(){
    this.hayError = false;
    console.log(this.termino);
    this.productoService.buscarProducto(this.termino)
    .subscribe((productos)=>{

      console.log(productos);
      this.productos = productos;
      
    },(err) =>{
      this.hayError =true;
      this.productos =[]
    });
  }

  goLogin(){
    this.router.navigate(['login']);
    this.verLogin = true;
    this.verLogout = false;
  }

  logout(){
    this.router.navigate(['']);
    this.verLogout = true;
    this.verLogin = false;
  }

}
