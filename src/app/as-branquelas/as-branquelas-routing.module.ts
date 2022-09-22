import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsBranquelasPage } from './as-branquelas.page';

const routes: Routes = [
  {
    path: '',
    component: AsBranquelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsBranquelasPageRoutingModule {}
