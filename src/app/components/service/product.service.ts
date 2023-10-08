import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private route: Router,
  ) {}
  baseUrl =
    'https://nestjstypescriptstartermgiumx-25gj--3000--7a1fe16d.local-credentialless.webcontainer.io';

  private elemento = new BehaviorSubject<string | null>(null);

  elementoId$ = this.elemento.asObservable();

  setElementoId(id: string) {
    this.elemento.next(id);
  }

  getData(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl);
  }
  /*buscartxt(termino: any, array: any) {
    let datos: string[] = [];
    termino = termino.toLowerCase();
    for (let dato of array) {
      let elemento = dato.title.toLowerCase();
      if (elemento.indexOf(termino) >= 0) {
        datos.push(dato);
      }
    }
    return datos;
  }*/
  buscartxt(termino: string, array: { title: string }[]): { title: string }[] {
    let datos: { title: string }[] = [];
    termino = termino.toLowerCase();
    for (let dato of array) {
      let elemento = dato.title.toLowerCase();
      if (elemento.indexOf(termino) >= 0) {
        datos.push(dato);
      }
    }
    return datos;
  }

  getIdData(idx: any): Observable<any[]> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${idx}`);
  }
}
