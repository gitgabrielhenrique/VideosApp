import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvasaoZumbiPage } from './invasao-zumbi.page';

const routes: Routes = [
  {
    path: '',
    component: InvasaoZumbiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvasaoZumbiPageRoutingModule {}
