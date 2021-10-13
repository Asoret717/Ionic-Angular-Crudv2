import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabasePage } from './database.page';

const routes: Routes = [
  {
    path: '',
    component: DatabasePage
  },
  {
    path: 'add-form',
    loadChildren: () => import('./add-form/add-form.module').then( m => m.AddFormPageModule)
  },
  {
    path: 'mod-form',
    loadChildren: () => import('./mod-form/mod-form.module').then( m => m.ModFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabasePageRoutingModule {}
