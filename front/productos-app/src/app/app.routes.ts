import { Routes } from '@angular/router';
import { ListarProductosComponent } from './products/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './products/crear-producto/crear-producto.component';

export const routes: Routes = [
  { path: '', component: ListarProductosComponent },
  { path: 'nuevo', component: CrearProductoComponent }
];
