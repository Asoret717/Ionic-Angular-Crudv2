import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { GamingService } from 'src/app/services/gaming.service';

@Component({
  selector: 'app-mod-form',
  templateUrl: 'mod-form.page.html',
  styleUrls: ['mod-form.page.scss'],
})

export class ModFormPage implements OnInit {

  myForm: FormGroup;
  submitted = false;
  id: any;

  constructor(public formBuilder: FormBuilder, private router: Router, private technologyService: GamingService,
    private activatedRoute : ActivatedRoute) {
    this.id=this.technologyService.getIdForm();
    console.log(this.id);
   }

  ngOnInit() {
    this.fetchUser(this.id);
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')]]
    })
  }

  fetchUser(id: number) {
    this.technologyService.getTechnologyById(id).subscribe((data) => {
      data['price']=data['price'].substring(0,data['price'].length-1);
      this.myForm.setValue({
        name: data['name'],
        price: data['price'] 
      });
    });
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
      this.technologyService.modifyTechnology(this.myForm.value,this.id).subscribe(() => {
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
