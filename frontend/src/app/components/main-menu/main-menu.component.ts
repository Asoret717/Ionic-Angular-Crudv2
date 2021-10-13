import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  goToDatabasePage(){
    this.router.navigateByUrl("/database");
  }
  goToContactPage(){
     this.router.navigateByUrl("/database");
  }
  goToLoginPage(){
     this.router.navigateByUrl("/database");
  }
  goToMainPage(){
    this.router.navigateByUrl("/home");
  }
}
