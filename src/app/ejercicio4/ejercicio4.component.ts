import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ServicioComponent } from './servicio/servicio.component';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.scss']
})
export class Ejercicio4Component implements OnInit {

  productos:Producto[] = []
 constructor(private servicioCompnent:ServicioComponent) { }
  
  ngOnInit(): void {
   this.servicioCompnent.getProductos().subscribe(data => this.productos = data)
  }

}
