import { Component, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  verqu: any = '';
  constructor(private route: ActivatedRoute, private api: ProductService) {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.api.getIdData(params['id']);
        })
      )
      .subscribe((data) => {
        this.verqu = data;
      }),
      (error: any) => {
        // Maneja los errores aquí
        console.error('Error al obtener datos de la API:', error);
      };
  }

  ngOnInit() {}
}
