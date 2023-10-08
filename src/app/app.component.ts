import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductService } from './components/service/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private buscar: ProductService) {}
  title = 'CodeSandbox';
  showFiller = false;

  buscartxt(nombre: any) {
    this.buscar.getData().subscribe((data: any) => {
      this.buscar.buscartxt(data, nombre);
    });
  }
}
