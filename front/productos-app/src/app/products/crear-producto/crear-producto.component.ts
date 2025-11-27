import { Component } from '@angular/core';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html'
})
export class CrearProductoComponent {

  nombre = '';
  precio: number | null = null;

  constructor(private productosService: ProductosService) {}

  crear() {
    if (!this.nombre || !this.precio) return;

    const nuevo: Producto = { nombre: this.nombre, precio: this.precio };

    this.productosService.crearProducto(nuevo).subscribe(() => {
      alert('Producto creado');
      this.nombre = '';
      this.precio = null;
    });
  }
}
