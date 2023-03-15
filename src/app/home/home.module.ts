import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HombreComponent } from './pages/hombre/hombre.component';
import { MujerComponent } from './pages/mujer/mujer.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { BarraNavegacionComponent } from './pages/barra-navegacion/barra-navegacion.component';
import { ProductoCardComponent } from './components/producto-card/producto-card.component';
import { BusquedaProductoComponent } from './components/busqueda-producto/busqueda-producto.component';





@NgModule({
  declarations: [
    HombreComponent,
    MujerComponent,
    ProductoComponent,
    BarraNavegacionComponent,
    ProductoCardComponent,
    BusquedaProductoComponent,
    
   
  ],
  exports: [
    HombreComponent,
    MujerComponent,
    ProductoComponent,
    BarraNavegacionComponent,
    ProductoCardComponent,
    BusquedaProductoComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
