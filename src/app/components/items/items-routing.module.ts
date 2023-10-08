import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';

const route: Routes = [{ path: '', component: ItemsComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
