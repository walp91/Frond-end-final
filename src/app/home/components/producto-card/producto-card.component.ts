import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interface/producto.inteface';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {

  @Input() productos: Producto[] = [];

  constructor() {}

  ngOnInit(): void {}

}
