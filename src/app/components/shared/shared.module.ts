import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
  ],
  exports: [
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
  ],
})
export class SharedModule {}
