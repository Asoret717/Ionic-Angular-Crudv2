import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModFormPage } from './mod-form.page';

const routes: Routes = [
  {
    path: '',
    component: ModFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModFormPageRoutingModule {}
