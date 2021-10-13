import { Component, OnInit, ViewChild } from '@angular/core';
import { SliderComponent } from '../components/slider/slider.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{
  @ViewChild(SliderComponent) sliderComponent:SliderComponent;
  constructor() {}
  
  ngOnInit(): void {}
  
  ionViewDidEnter() {
    this.sliderComponent.ionViewDidEnter();
  }

  ionViewWillLeave(){  
    this.sliderComponent.ionViewWillLeave();
  }
  
  ionViewWillEnter(){
    this.sliderComponent.ionViewWillEnter();
  }
  
  slideChanged(){
    this.sliderComponent.slideChanged();
  }
  
  afterslidesLoad() {
    this.sliderComponent.afterslidesLoad();
  }
}




