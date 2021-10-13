import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Technology } from '../models/technology';
import { GamingService } from '../services/gaming.service';


@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})

export class DatabasePage implements OnInit {

  public gaming: Array<Technology> = []; 

  constructor(private router: Router ,private technologyService: GamingService) {}

  ngOnInit(): void {
    this.loadInfo();
  }
  loadInfo(){
    this.technologyService.getGaming().subscribe((b: Array<Technology>) => {
      this.gaming = b;
    })
  }
  ionViewWillEnter(){
    this.loadInfo();
  }

  goToMainPage(){this.router.navigateByUrl("/home");}

  goToFormPage(){this.router.navigateByUrl("/database/add-form");}

  goToFormPage2(idTechnology: number){
    this.technologyService.setIdForm(idTechnology);
    this.router.navigateByUrl("/database/mod-form");
  }
  
  deleteTechnology(idTechnology: number){
    this.technologyService.deleteTechnology(idTechnology).subscribe(() => {
      this.loadInfo();
    }); 
  }
}

