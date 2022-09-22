import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvasaoZumbiPageRoutingModule } from './invasao-zumbi-routing.module';

import { InvasaoZumbiPage } from './invasao-zumbi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvasaoZumbiPageRoutingModule
  ],
  declarations: [InvasaoZumbiPage]
})
export class InvasaoZumbiPageModule {}
