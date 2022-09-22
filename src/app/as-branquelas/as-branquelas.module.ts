import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsBranquelasPageRoutingModule } from './as-branquelas-routing.module';

import { AsBranquelasPage } from './as-branquelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsBranquelasPageRoutingModule
  ],
  declarations: [AsBranquelasPage]
})
export class AsBranquelasPageModule {}
