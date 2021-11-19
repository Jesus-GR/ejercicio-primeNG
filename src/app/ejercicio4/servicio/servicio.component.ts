import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from 'src/assets/products';
import { Producto } from '../producto';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  productos:Producto[] = PRODUCTS
  constructor() { }

  ngOnInit(): void {
    
  }

  getProductos():Observable<Producto[]>{
    return of(this.productos)
  }


}
