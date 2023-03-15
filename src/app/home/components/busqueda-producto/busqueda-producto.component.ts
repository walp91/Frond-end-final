import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html',
  styleUrls: ['./busqueda-producto.component.css']
})

export class BusquedaProductoComponent implements OnInit {
  ngOnInit(): void {
    this.sugerencias

      .pipe(
        debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  sugerencias: Subject<string> = new Subject();

  termino: string = "";

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.sugerencias.next(this.termino);
  }

}
