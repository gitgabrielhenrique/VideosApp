import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DjangoLivrePage } from './django-livre.page';

const routes: Routes = [
  {
    path: '',
    component: DjangoLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DjangoLivrePageRoutingModule {}
