import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../core/services/productos.service';
import { Producto } from '../../core/models/producto.model';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html'
})
export class ListarProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  eliminar(id: number) {
    this.productosService.eliminarProducto(id).subscribe(() => {
      this.cargarProductos(); // recargar lista
    });
  }
}
