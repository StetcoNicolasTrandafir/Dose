import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoffeeTypesPage } from './coffee-types.page';

const routes: Routes = [
  {
    path: '',
    component: CoffeeTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoffeeTypesPageRoutingModule {}
