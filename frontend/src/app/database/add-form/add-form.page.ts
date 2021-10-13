import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Technology } from 'src/app/models/technology';
import { GamingService } from 'src/app/services/gaming.service';

@Component({
  selector: 'app-add-form',
  templateUrl: 'add-form.page.html',
  styleUrls: ['add-form.page.scss'],
})

export class AddFormPage implements OnInit {

  myForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder, private router: Router,private zone: NgZone, private technologyService: GamingService) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')]]
    })
  }

  get errorCtr() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.myForm.valid) {
      console.log('All fields are required.')
      return false;
    } else {
      this.myForm.value.price+="$";
      this.technologyService.createTechnology(this.myForm.value).subscribe(() => {
        this.myForm.reset();
        this.technologyService.getGaming();
        this.router.navigateByUrl("/database");
      });
    }
  }

  goToDatabasePage(){
    this.router.navigateByUrl("/database");
  }
}