import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './components/shared/shared.module';
import { ItemsModule } from './components/items/items.module';

const route: Routes = [
  {
    path: 'items/:id',
    loadChildren: () =>
      import('./components/items/items.module').then((m) => m.ItemsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
