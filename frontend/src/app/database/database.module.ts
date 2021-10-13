import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatabasePageRoutingModule } from './database-routing.module';

import { DatabasePage } from './database.page';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatabasePageRoutingModule
  ],
  declarations: [DatabasePage,MainMenuComponent,FooterComponent]
})
export class DatabasePageModule {}
