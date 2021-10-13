import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SliderComponent } from '../components/slider/slider.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,MainMenuComponent,FooterComponent,SliderComponent]
})
export class HomePageModule {}
