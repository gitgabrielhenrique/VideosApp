import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DjangoLivrePageRoutingModule } from './django-livre-routing.module';

import { DjangoLivrePage } from './django-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DjangoLivrePageRoutingModule
  ],
  declarations: [DjangoLivrePage]
})
export class DjangoLivrePageModule {}
