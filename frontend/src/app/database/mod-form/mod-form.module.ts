import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModFormPageRoutingModule } from './mod-form-routing.module';

import { ModFormPage } from './mod-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModFormPageRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations: [ModFormPage]
})
export class ModFormPageModule {}
