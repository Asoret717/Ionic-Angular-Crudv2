import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})

export class SliderComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides

  public employee: Array<Employee> = []; 
  
  constructor(private employeeService: EmployeeService){}
  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((b: Array<Employee>) => {
      this.employee = b;
    })
  }
  viewEntered = false;
  slideOptions = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.957,
    loop: true,
    autoplayDisableOnInteraction: false
  };
  
  ionViewDidEnter() {
    this.viewEntered=true;
  }

  ionViewWillLeave(){  
    this.slides.stopAutoplay();
  }
  
  ionViewWillEnter(){
      this.slides.startAutoplay();
  }
  
  slideChanged(){
    this.slides.startAutoplay();
  }
  
  afterslidesLoad() {
    this.slides.startAutoplay();
  }
}
