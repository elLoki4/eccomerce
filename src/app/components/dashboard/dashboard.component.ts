import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private product: ProductService,
    private route: Router,
  ) {}
  listProduct: any[] = [];
  ngOnInit() {
    this.callApi();
  }

  callApi() {
    this.product.getData().subscribe((data) => {
      this.listProduct = data;
      console.log(this.listProduct);
    });
  }
}
