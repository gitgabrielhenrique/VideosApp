import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-fuga-das-galinhas',
    loadChildren: () => import('./a-fuga-das-galinhas/a-fuga-das-galinhas.module').then( m => m.AFugaDasGalinhasPageModule)
  },  {
    path: 'as-branquelas',
    loadChildren: () => import('./as-branquelas/as-branquelas.module').then( m => m.AsBranquelasPageModule)
  },
  {
    path: 'invasao-zumbi',
    loadChildren: () => import('./invasao-zumbi/invasao-zumbi.module').then( m => m.InvasaoZumbiPageModule)
  },
  {
    path: 'homem-aranha-sem-volta-para-casa',
    loadChildren: () => import('./homem-aranha-sem-volta-para-casa/homem-aranha-sem-volta-para-casa.module').then( m => m.HomemAranhaSemVoltaParaCasaPageModule)
  },
  {
    path: 'thor-amor-e-trovao',
    loadChildren: () => import('./thor-amor-e-trovao/thor-amor-e-trovao.module').then( m => m.ThorAmorETrovaoPageModule)
  },
  {
    path: 'django-livre',
    loadChildren: () => import('./django-livre/django-livre.module').then( m => m.DjangoLivrePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
