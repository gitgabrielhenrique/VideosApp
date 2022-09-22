import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemAranhaSemVoltaParaCasaPageRoutingModule } from './homem-aranha-sem-volta-para-casa-routing.module';

import { HomemAranhaSemVoltaParaCasaPage } from './homem-aranha-sem-volta-para-casa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemAranhaSemVoltaParaCasaPageRoutingModule
  ],
  declarations: [HomemAranhaSemVoltaParaCasaPage]
})
export class HomemAranhaSemVoltaParaCasaPageModule {}
